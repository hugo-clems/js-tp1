import { Injectable } from '@angular/core';
import { Author } from './author';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>('/api/authors', author);
  }

}
