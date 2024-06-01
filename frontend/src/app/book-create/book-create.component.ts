import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
	selector: 'app-book-create',
	standalone: true,
	imports: [ReactiveFormsModule, RouterModule],
	templateUrl: './book-create.component.html',
	styleUrl: './book-create.component.css'
})
export class BookCreateComponent {
	bookService = inject(BookService)
	book: Book | undefined

	constructor(private router: Router) {}

	createBookForm = new FormGroup({
		title: new FormControl(''),
		author: new FormControl(''),
		description: new FormControl(''),
		genre: new FormControl(''),
		publishYear: new FormControl()
	})

	createBook() {
		this.bookService.createBook(
			this.createBookForm.value.title ?? '',
			this.createBookForm.value.author ?? '',
			this.createBookForm.value.description ?? '',
			this.createBookForm.value.genre ?? '',
			this.createBookForm.value.publishYear ?? -1
		).subscribe(res => {
			// return res;
			this.router.navigate([""])
		})
		
	}
}
