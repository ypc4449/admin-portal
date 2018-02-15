import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AddNewBookComponent} from './add-new-book/add-new-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const appRoutes:Routes= [
    {
		path : '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'addNewBook',
		component: AddNewBookComponent
	},
	{
		path: 'bookList',
		component: BookListComponent
	},
	{
		path: 'viewBook/:id',
		component: ViewBookComponent
	},
	{
		path: 'editBook/:id',
		component: EditBookComponent
	}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);