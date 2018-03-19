import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatTableDataSource } from '@angular/material/table';
import { LessonsDatasource } from '../services/lessons.datasource';
import { MatPaginator } from '@angular/material/paginator';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course:Course;
  dataSource: LessonsDatasource;
  displayedColumns = ["seqNo", "description", "duration"];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.dataSource = new LessonsDatasource(this.coursesService);
    this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap(() => this.dataSource.loadLessons(this.course.id, '', 'asc', this.paginator.pageIndex, this.paginator.pageSize) )
    ).subscribe();
  }

}
