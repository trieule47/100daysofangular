import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-witches',
  templateUrl: './witches.component.html',
  styleUrls: ['./witches.component.css']
})
export class WitchesComponent implements OnInit {

  @Input() checked;
  @Output() round = new EventEmitter<any>();
  ischeck=false;
  constructor() { }

  ngOnInit() {
    console.log(this.checked, this.round);
  }

  handleRound(){
    console.log(this.ischeck)
    this.ischeck = !this.ischeck;
    this.round.emit(this.ischeck);
  }

}
