import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

// @Injectable()
export class PostsComponent implements OnInit {
  posts;
  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.posts = data;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, post).subscribe(data => {
      this.posts = [data, ...this.posts];
    });
  }

  updatePost(post) {
    this.http
      .patch(this.url + '/' + post.id, { title: 'Updated' })
      .subscribe(res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1, res);
      });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(res => {
      console.log(res);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
