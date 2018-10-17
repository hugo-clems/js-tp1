import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BookDisplayComponent],
  exports: [BookDisplayComponent]
})
export class ConsultationModule {}
