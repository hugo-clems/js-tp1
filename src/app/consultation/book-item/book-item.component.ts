import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
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
