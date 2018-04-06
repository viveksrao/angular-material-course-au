import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthorsService {

  constructor(private http:HttpClient) { }

  findAllAuthors(): Observable<Author[]>{
    return this.http.get('/api/authors').pipe(map(res => res['payload']));
  }

}
