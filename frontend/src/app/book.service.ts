import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable } from 'rxjs';


@Injectable({
  	providedIn: 'root'
})
export class BookService {
	// protected bookList: Book[] = []
	url = 'http://localhost:4000/api/book'

	constructor(private http: HttpClient) { }

	createBook(title: string, author: string, description: string, genre: string, publishYear: number) {
		// console.log({title, author, description, genre, publishYear});
		return this.http.post(this.url, {title, author, description, genre, publishYear})
	}

	getAllBooks() : Observable<Book[]> {
		return this.http.get<Book[]>(this.url) ?? []
	}

	getBookById(id: string) : Observable<Book | undefined> {
		return this.http.get<Book>(`${this.url}/${id}`) ?? {}
	}

	updateBook(id: string, title: string, author: string, description: string, genre: string, publishYear: number) {
		console.log(id, {title, author, description, genre, publishYear});
		return this.http.put(`${this.url}/${id}`, {title, author, description, genre, publishYear})
	}

	deleteBook(id: string) {
		return this.http.delete(`${this.url}/${id}`)
	}
}
