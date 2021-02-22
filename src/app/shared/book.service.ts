import { Injectable } from '@angular/core';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks():Array<Book>{

   const books:Array<Book> =[{       id:"TECH-100001",       title:"HTML & CSS: Design and Build Websites",  price:2382.21,     author:"Jon Duckett",       category:"Technical",       publishYear:2011,       availableCopies:3,       totalCopies:5,       imageUrl:"assets/books/TECH-100001.jpg"   },
   {       id:"FICT-120819",       title:"A Tale of Two Cities",     price:839.00,    author:"Charles Dickens",       category:"Fiction",       publishYear:1859,       availableCopies:1,       totalCopies:2,       imageUrl:"assets/books/FICT-120819.jpg"   },
   {       id:"HIST-000111",       title:"The Discovery of India",    price:7700.00,     author:"Jawaharlal Nehru",       category:"History",       publishYear:1946,       availableCopies:0,       totalCopies:2,       imageUrl:"assets/books/HIST-000111.jpg"   },
   {       id:"BIO-078796",       title:"The Story of My Experiments With Truth",  price:989.00,       author:"Mohandas K. Gandhi",       category:"Biography",       publishYear:1928,       availableCopies:3,       totalCopies:15,       imageUrl:"assets/books/BIO-078796.jpg"   }];

  return books;
}

}
