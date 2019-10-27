import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <input [(ngModel)]="text" />
  <p>{{ text | title }}</p>
  `
})
export class CoursesComponent {
  text: string;
}
