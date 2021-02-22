import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Array<Book>;
  
  constructor(public bookService:BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();

  }

  getCategory(category:string){

    return category.toLowerCase() + "-text";
  }
}
