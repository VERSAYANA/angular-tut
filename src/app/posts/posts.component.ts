import { Component, OnInit, Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';

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

  constructor(private service: PostsService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(data => {
      this.posts = [data, ...this.posts];
    });
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(res => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1, res);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(res => {
      console.log(res);
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
