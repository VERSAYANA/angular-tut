import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('likesCount') likesCount: number;
  // tslint:disable-next-line: no-input-rename
  @Input('isActive') isActive: boolean;

  onClick() {
    if (this.isActive) {
      this.likesCount -= 1;
    } else {
      this.likesCount += 1;
    }
    this.isActive = !this.isActive;
  }
}
