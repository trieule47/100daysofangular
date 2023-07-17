import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auther-list',
  templateUrl: './auther-list.component.html',
  styleUrls: ['./auther-list.component.css']
})
export class AutherListComponent implements OnInit {

  authors = authors;

  constructor() { }

  ngOnInit() {
  }

  deleteAuthorEvent(author: Auther) {
    console.log('author', author);
    this.authors = this.authors.filter(e => e.id !== author.id);
  }

}

export interface Auther {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

const authors: Auther[] = [
  { id: 1, firstName: 'Dung', lastName: 'Tran', email: 'tran@gmail.com', gender: 'male', ipAddress: '123' },
  { id: 2, firstName: 'Trieu', lastName: 'Le', email: 'trieule@gmail.com', gender: 'male', ipAddress: '124' },
  { id: 3, firstName: 'Hai', lastName: 'Nguyen', email: 'hai@gmail.com', gender: 'male', ipAddress: '125' },
]
