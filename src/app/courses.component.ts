import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <button class="btn btn-primary">Save</button>
  <!-- <h2>
    {{ title }}
  </h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul> -->
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses: string[];

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
