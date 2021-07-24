import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {BookListComponent} from "./component/books/book-list/book-list.component";
import {BookAddComponent} from "./component/books/book-add/book-add.component";
import {BookUpdateComponent} from "./component/books/book-update/book-update.component";
import {BookDetailComponent} from "./component/books/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'books/add',
        component: BookAddComponent
      },
      {
        path: 'books/:id/edit',
        component: BookUpdateComponent
      },
      {
        path: 'books/:id/detail',
        component: BookDetailComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
