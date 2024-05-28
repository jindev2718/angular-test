import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Photo } from './models';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos/';
  constructor(private http: HttpClient) { }

  photos = new BehaviorSubject<Array<Photo>>([])

    search() {
      this.http.get<any[]>(this.apiUrl).subscribe(posts => {
        this.photos.next(
          posts.map((x) => {
            const post = new Photo()
            post.id = x.id
            post.albumId = x.userId
            post.title = x.title
            post.url = x.url
            post.thumbnailUrl = x.thumbnailUrl
            return post
          })
        )
      });
  }
}
