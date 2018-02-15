import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';
import { Book } from '../book';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetBookService } from '../get-book.service';
import { EditBookService } from '../edit-book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  private bookId: number;
  private book: Book = new Book();
  private bookUpdated: boolean;

  onSubmit() {
  	this.editBookService.sendBook(this.book).subscribe(
  		data => {
  			this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
  			this.bookUpdated=true;
  		},
  		error => console.log(error)
  	);
  }

  constructor(
    private uploadImageService: UploadImageService,
  	private editBookService: EditBookService,
  	private getBookService: GetBookService,
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
  		this.bookId = Number.parseInt(params['id']);
  	});

  	this.getBookService.getBook(this.bookId).subscribe(
  		res => {
  			this.book = res.json();
  		}, 
  		error => console.log(error)
  	)
  }

}

