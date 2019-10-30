import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: 'Dev'
    },
    {
      id: 2,
      name: 'Art'
    },
    {
      id: 3,
      name: 'Language'
    }
  ];

  log(input: any) {
    console.log(input);
  }
  submit(formValue) {
    console.log(formValue);
  }
  constructor() {}

  ngOnInit() {}
}
