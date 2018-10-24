import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  model: Book;

  @Output()
  delete: EventEmitter<Book> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.bookService.getBook(parseInt(params.get('id'), 10))
        )
      )
      .subscribe((book: Book) => (this.model = book));
  }
}
