import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  @Input()
  model: Book;

  @Output()
  delete: EventEmitter<Book> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete() {
    this.delete.emit(this.model);
  }
}
