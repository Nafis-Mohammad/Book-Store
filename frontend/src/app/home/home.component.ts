import { Component, inject } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { Book } from '../book';
import { BookService } from '../book.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [BookComponent, NgFor, RouterModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
	bookList: Book[] = []
	bookService: BookService = inject(BookService)
	filteredBookList: Book[] = []

	constructor() {
		this.bookService.getAllBooks().subscribe((bookList: Book[]) => {
			this.bookList = bookList
			this.filteredBookList = bookList
		})
	}
	
	filterResults(text: string) {
		if(!text) this.filteredBookList = this.bookList

		this.filteredBookList = this.bookList.filter(book => book?.title.toLowerCase().includes(text.toLowerCase())
		)
	}
}
