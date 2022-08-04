import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts:IPost[]=[];
  postSubscription!:Subscription;
  intervalSubscription!:Subscription;
  constructor(private postService:PostService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postSubscription = this.postService.getPostsWithCategory().subscribe({
      next:(data)=>{
        this.posts = data;
      },
      error:(error)=>{
        console.log(error);
        
      },
      complete:()=>{
          console.log('complete interval');
          
      }
   })
  }
  ngOnDestroy(): void {
    this.postSubscription && this.postSubscription.unsubscribe();
    this.intervalSubscription && this.intervalSubscription.unsubscribe();
  }

}
