import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DeclarativePostService } from 'src/app/services/declarative-post.service';

@Component({
  selector: 'app-declarative-posts',
  templateUrl: './declarative-posts.component.html',
  styleUrls: ['./declarative-posts.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent implements OnInit {
  post$= this.postService.post$;
  constructor(private postService:DeclarativePostService) { 

  }

  ngOnInit(): void {
  }

}
