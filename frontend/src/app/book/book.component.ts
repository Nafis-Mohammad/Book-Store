import { Component, Input } from '@angular/core';

import { Book } from '../book';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-book',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './book.component.html',
	styleUrl: './book.component.css'
})
export class BookComponent {
	@Input() book!:Book
}
