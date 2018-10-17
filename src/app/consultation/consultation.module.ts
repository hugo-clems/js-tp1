import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BookDisplayComponent, BookListComponent],
  exports: [BookListComponent]
})
export class ConsultationModule {}
