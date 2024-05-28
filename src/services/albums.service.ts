import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Album } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) { }

  albums = new BehaviorSubject<Array<Album>>([])

    search() {
      this.http.get<any[]>(this.apiUrl).subscribe(posts => {
        this.albums.next(
          posts.map((x) => {
            const post = new Album()
            post.id = x.id
            post.userId = x.userId
            post.title = x.title
            return post
          })
        )
      });
  }
}
