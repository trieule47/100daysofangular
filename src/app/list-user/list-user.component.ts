import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getListUser();
    console.log(this.users);
  }

}
