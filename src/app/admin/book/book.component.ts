import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  model: Book;

  constructor(private bookService: BookService) {
    this.model = new Book();
  }

  ngOnInit() { }

  onSubmit() {
    this.bookService.createBook(this.model).subscribe(() => this.model = new Book());
  }

}
