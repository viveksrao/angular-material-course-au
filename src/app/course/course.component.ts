import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatTableDataSource } from '@angular/material/table';
import { LessonsDatasource } from '../services/lessons.datasource';
import { MatPaginator } from '@angular/material/paginator';
import { startWith, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { MatSort } from '@angular/material/sort';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course:Course;
  dataSource: LessonsDatasource;
  displayedColumns = ["seqNo", "description", "duration"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.dataSource = new LessonsDatasource(this.coursesService);
    this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        this.paginator.pageIndex = 0;
        this.loadLessonsPage();
      })
    )
    .subscribe();
    merge(this.sort.sortChange,this.paginator.page)
    .pipe(
      tap(() => this.loadLessonsPage())
    )
    .subscribe();
  }

  loadLessonsPage(){
    this.dataSource.loadLessons(
      this.course.id, 
      this.input.nativeElement.value, 
      this.sort.direction, 
      this.paginator.pageIndex, 
      this.paginator.pageSize);
  }

}
