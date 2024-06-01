import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
	selector: 'app-book-details',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './book-details.component.html',
	styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute)
	bookService = inject(BookService)
	book: Book | undefined

	constructor() {
		const bookId = String(this.route.snapshot.params["id"])
		this.bookService.getBookById(bookId).subscribe((book) => {
			console.log(book);
			this.book = book
		})
	}
}
