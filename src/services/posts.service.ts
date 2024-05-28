import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Post} from './models'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  posts = new BehaviorSubject<Array<Post>>([])

    search() {
      this.http.get<any[]>(this.apiUrl).subscribe(posts => {
        this.posts.next(
          posts.map((x) => {
            const post = new Post()
            post.id = x.id
            post.userId = x.userId
            post.title = x.title
            post.body = x.body
            return post
          })
        )
      });
  }
}
