import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Auther } from '../auther-list/auther-list.component';

@Component({
  selector: 'app-auther-detail',
  templateUrl: './auther-detail.component.html',
  styleUrls: ['./auther-detail.component.css']
})
export class AutherDetailComponent implements OnInit {

  @Input() author: Auther;
  @Output() deleteItem = new EventEmitter<Auther>();
  constructor() { }

  ngOnInit() {
  }

  handleDelete() {
    this.deleteItem.emit(this.author)
  }

}
