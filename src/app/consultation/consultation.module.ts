import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookDisplayComponent],
  exports: [BookDisplayComponent]
})
export class ConsultationModule {}
