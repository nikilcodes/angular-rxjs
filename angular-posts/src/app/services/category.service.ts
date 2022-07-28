import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<{[id:string]:ICategory}>(`https://rxjs-posts-default-rtdb.firebaseio.com/categories.json`)
    .pipe(map((categories)=>{
      let postsCategoryData:ICategory[]=[];
      for(let id in categories){
         postsCategoryData.push({...categories[id],id}) 
      }
      return postsCategoryData;
    }));
  }
}
