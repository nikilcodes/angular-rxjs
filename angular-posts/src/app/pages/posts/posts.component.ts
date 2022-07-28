import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts:IPost[]=[];
  postSubscription!:Subscription;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.getPostsWithCategory().subscribe((posts)=>{
       this.posts = posts
    })
  }

  ngOnDestroy(): void {
    this.postSubscription && this.postSubscription.unsubscribe();
  }

}
