import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit, OnDestroy {
  posts:IPost[]=[];
  postSubscription!:Subscription;
  constructor(private postService:PostService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.getPostsWithCategory().subscribe((posts)=>{
       this.posts = posts;
       this.ref.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this.postSubscription && this.postSubscription.unsubscribe();
  }

}
