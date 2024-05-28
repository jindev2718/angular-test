import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsDetailService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getDetailPost(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${postId}`);
  }
}
