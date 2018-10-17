import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  private book: Book;

  constructor() {}

  ngOnInit() {
    this.book = {
      title: 'Title',
      description: 'Description'
    };
  }
}
