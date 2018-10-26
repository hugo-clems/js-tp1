import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component'
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AdminHomeComponent, children: [
    { path: 'book', component: BookComponent },
    { path: 'author', component: AuthorComponent }
  ] }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminHomeComponent, BookComponent, AuthorComponent]
})
export class AdminModule { }
