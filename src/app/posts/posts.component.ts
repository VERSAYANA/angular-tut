import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

// @Injectable()
export class PostsComponent   {
  posts

  constructor(private http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.posts = data;
    })
  }



}
