import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CourseResolver implements Resolve<Course>{
  constructor(private coursesService:CoursesService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course>{
    return this.coursesService.findCourseById(route.params['id']);
  }
}
