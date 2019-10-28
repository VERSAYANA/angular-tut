import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'A post',
    isFavorite: true
  };

  isFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('favorite changed', eventArgs);
  }
}
