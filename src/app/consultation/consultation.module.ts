import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { BookItemComponent } from './book-item/book-item.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [BookDisplayComponent, BookListComponent, BookItemComponent],
  exports: [BookDisplayComponent, BookListComponent]
})
export class ConsultationModule {}
