import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { FormsModule } from '@angular/forms';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LibraryDetailsComponent,
    ViewBookComponent,
    ViewMemberComponent,
    BooksComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
