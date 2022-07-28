import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../models/IPost';
import { map, mergeMap } from 'rxjs/operators';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,private categoryService:CategoryService) { }

  getPosts(){
    return this.http.get<{[id:string]:IPost}>(`https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`).pipe(map(posts=>{
      let postsData:IPost[]=[];
      for(let id in posts){
        postsData.push({...posts[id],id});
        console.log("postData",posts[id]);
      }      
      return postsData;
    }));
  }

  getPostsWithCategory(){
    return this.getPosts().pipe(mergeMap((posts)=>{
        return this.categoryService.getCategories().pipe(map(categories=>{
          return posts.map(post=>{
            return{
              ...post,
              categoryName:categories.find(category=>category.id === post.categoryId)?.title
            }
          })
        }))
    }))
  }

}
