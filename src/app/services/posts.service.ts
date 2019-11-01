import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, post);
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, { title: 'Updated' });
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
