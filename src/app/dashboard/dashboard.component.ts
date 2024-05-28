import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { AlbumsService } from '../../services/albums.service';
import { PhotosService } from '../../services/photos.service';
import { CommonModule } from '@angular/common'
import { Post } from '../../services/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  postCount: number = 0;
  albumCount: number = 0;
  photoCount: number = 0;
  posts: Post[] = [];
  photos: any[] = [];

  constructor(private postService: PostsService, private albumService: AlbumsService, private photoService: PhotosService) { }

  ngOnInit(): void {
    this.postService.posts.subscribe(value => {
      this.postCount = value.length;
      this.posts = value
    });
    this.postService.search()

    this.albumService.albums.subscribe(value => {
      this.albumCount = value.length;
    });
    this.albumService.search()

    this.photoService.photos.subscribe(value => {
      this.photoCount = value.length;
      this.photos = value;
    })
    this.photoService.search()
  }
}
