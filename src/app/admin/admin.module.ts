import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  { path: '', component: AdminHomeComponent, children: [
    { path: 'book', component: BookComponent }
  ] }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ],
  declarations: [AdminHomeComponent, BookComponent]
})
export class AdminModule { }
