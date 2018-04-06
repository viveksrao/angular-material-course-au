import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../model/author';
import { Observable } from 'rxjs/Observable';
import { AuthorsService } from '../services/authors.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  allAuthors$: Observable<Author[]>;

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    const authors$ = this.authorsService.findAllAuthors();
    this.allAuthors$ = authors$.pipe(
      map(authors => authors)
    );
  }
}
