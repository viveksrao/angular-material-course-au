import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course:Course;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
  }

  ngAfterViewInit() {
  }

}
