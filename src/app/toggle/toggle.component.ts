import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  name = 'Trieu';
  isClick=true;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.name= 'Lê Ngọc Vĩnh Triều';
    this.isClick = !this.isClick;
  }



}
