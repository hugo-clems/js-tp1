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

  getBooks(): Book[] {
    return [
      {
        title: 'Title',
        description: 'Description'
      },
      {
        title: 'Title2',
        description: 'Description2'
      }
    ];
  }
}
