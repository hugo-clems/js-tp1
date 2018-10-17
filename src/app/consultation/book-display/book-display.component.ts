import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  @Input()
  model: Book;

  constructor() {}

  ngOnInit() {}
}
