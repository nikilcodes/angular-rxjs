import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(`https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`);
  }
}
