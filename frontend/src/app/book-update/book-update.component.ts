import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
	selector: 'app-book-update',
	standalone: true,
	imports: [ReactiveFormsModule, RouterModule],
	templateUrl: './book-update.component.html',
	styleUrl: './book-update.component.css'
})
export class BookUpdateComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
	bookService = inject(BookService)
	book: Book | undefined
  bookId = String(this.route.snapshot.params["id"])

  constructor(private router: Router) {
		
		this.bookService.getBookById(this.bookId).subscribe((book) => {
			// console.log(book);
			this.book = book
		})
	}

	updateBookForm = new FormGroup({
		title: new FormControl(),
		author: new FormControl(),
		description: new FormControl(),
		genre: new FormControl(),
		publishYear: new FormControl()
	})

	updateBook() {
		this.bookService.updateBook(
      		this.bookId,
			this.updateBookForm.value.title ?? this.book?.title!,
			this.updateBookForm.value.author ?? this.book?.author!,
			this.updateBookForm.value.description ?? this.book?.description!,
			this.updateBookForm.value.genre ?? this.book?.genre!,
			this.updateBookForm.value.publishYear ?? this.book?.publishYear!
		).subscribe(res => {
			this.router.navigate([""])
			// return res;
		})
		
	}
}
