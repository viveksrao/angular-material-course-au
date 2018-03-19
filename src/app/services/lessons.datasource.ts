import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../model/lesson';
import { CoursesService } from './courses.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import {of} from "rxjs/observable/of";


export class LessonsDatasource implements DataSource<Lesson>{

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

  constructor(private coursesService: CoursesService){
  }

  loadLessons(courseId: number, filter: string, sortDirection: string, pageIndex: number, pageSize: number){
    this.loadingSubject.next(true);
    this.coursesService.findLessons(courseId, filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(lessons => this.lessonsSubject.next(lessons));
  }

  connect(collectionViewer: CollectionViewer): Observable<Lesson[]>{
    return this.lessonsSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void{
    this.lessonsSubject.complete();
    this.loadingSubject.complete();
  }
}
