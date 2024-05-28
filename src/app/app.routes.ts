import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "albums",
    component: AlbumsComponent,
  },
  {
    path: "photos",
    component: PhotosComponent,
  }
];
