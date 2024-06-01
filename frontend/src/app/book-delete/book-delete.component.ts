import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
	selector: 'app-book-delete',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './book-delete.component.html',
	styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent {
	route: ActivatedRoute = inject(ActivatedRoute)
	bookService = inject(BookService)
	book: Book | undefined
	bookId = String(this.route.snapshot.params["id"])

	constructor(private router: Router) {}

	deleteBook() {
		this.bookService.deleteBook(this.bookId).subscribe(res => {
			this.router.navigate([""])
			// return res
		})
		
	}
}
