import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {
  title = 'Angular ' + VERSION.major;

  user = {name: "Trieu", age: 25};
  inputType = "text";
  text = "hi";
  constructor() { }

  ngOnInit() {
  }

  handle() {
    this.text = 'tttttt';
    console.log('kkkk');
  }
}
