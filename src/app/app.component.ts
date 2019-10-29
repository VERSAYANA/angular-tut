import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {
      id: 0,
      name: 'course0'
    },
    {
      id: 1,
      name: 'course1'
    },
    {
      id: 2,
      name: 'course2'
    }
  ];

  onAdd() {
    this.courses.push({
      id: 3,
      name: 'course3'
    });
  }
  onUpdate(course) {
    course.name = 'Updated';
  }
}
