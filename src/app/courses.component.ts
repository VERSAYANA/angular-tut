import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <p>{{ releaseDate | date: shortDate }}</p>
  `
})
export class CoursesComponent {
  releaseDate = new Date();
}
