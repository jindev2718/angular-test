import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchQuery: string = '';
  page: number = 1;  // Current page number
  pageSize: number = 10;  // Number of items per page
  sortField: string = '';
  sortDirection: string = 'asc';
  selectedPost: any = null;
  index: number = 0;
  constructor(private postService: PostsService, private postDetailService: PostDetailComponent) { }

  ngOnInit(): void {
    this.postService.posts.subscribe(value => {
      this.posts = value
      this.filteredPosts = value
    })
  };

  filterPosts(): void {
    this.filteredPosts = this.posts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    this.sortPosts();
  };
  sortPosts(): void {
    if (this.sortField) {
      this.filteredPosts.sort((a, b) => {
        let aField = a[this.sortField];
        let bField = b[this.sortField];

        if (aField < bField) {
          return this.sortDirection === 'asc' ? -1 : 1;
        } else if (aField > bField) {
          return this.sortDirection === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
  }

  setSortField(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortPosts();
  }

  selectPost(post: any): void {
    this.selectedPost = post;
  }


}
