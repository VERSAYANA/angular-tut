import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <button (click)="saveClicked($event)">Save</button>
  `
})
export class CoursesComponent {
  saveClicked($event) {
    console.log("Save button was clicked", $event)
  }
}
