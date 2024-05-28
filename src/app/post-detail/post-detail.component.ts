import { Component, Input, OnInit } from '@angular/core';
import { PostsDetailService } from '../../services/posts-detail.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{

  @Input() postId: number = 1;
  post: any = null;
  constructor(private postDetailService: PostsDetailService) { }

  ngOnInit(): void {
    this.postDetailService.getDetailPost(this.postId).subscribe(post => {
      this.post = post;
    })
  }
}
