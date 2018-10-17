import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {
  constructor() {}

  getBook(): Book {
    return {
      title: 'Title',
      description: 'Description'
    };
  }
}
