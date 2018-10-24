import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultationModule } from './consultation/consultation.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './consultation/book-list/book-list.component';
import { BookDisplayComponent } from './consultation/book-display/book-display.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/:id', component: BookDisplayComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConsultationModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
