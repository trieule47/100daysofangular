import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Trieu';
  toggle = false;
  isChecked = true;
  isRound=false;

  changeState(){
    this.toggle = !this.toggle;
  }

  handleCheck(value){
    this.isRound = value;
    console.log(value);
  }
}
