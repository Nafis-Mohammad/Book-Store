import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path: "book-details/:id",
        component: BookDetailsComponent,
        title: "Book Details Page"
    },
    {
        path: "book-update/:id",
        component: BookUpdateComponent,
        title: "Book Update Page"
    },
    {
        path: "book-create",
        component: BookCreateComponent,
        title: "Book Create Page"
    },
    {
        path: "book-delete/:id",
        component: BookDeleteComponent,
        title: "Book Delete Page"
    },
];
