import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSelectModule,MatInputModule,MatGridListModule,MatSlideToggleModule,MatDatepickerModule, MatListModule} from '@angular/material';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginService } from './login.service';
import { AddBookService } from './add-book.service';
import { UploadImageService} from './upload-image.service';
import { GetBookListService } from './get-book-list.service';
import {GetBookService} from './get-book.service';
import {EditBookService} from './edit-book.service';
import {RemoveBookService} from './remove-book.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { BookListComponent, DialogResultExampleDialog } from './book-list/book-list.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialog,
    ViewBookComponent,
    EditBookComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSelectModule,MatInputModule,MatGridListModule,MatSlideToggleModule,MatListModule,
    HttpModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatListModule


  ],
  providers: [LoginService,
  AddBookService,
  UploadImageService,
  GetBookListService,
  GetBookService,
  EditBookService,
  RemoveBookService
],
  bootstrap: [AppComponent,DialogResultExampleDialog]
})
export class AppModule { }
