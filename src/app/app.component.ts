import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  model= {
    name:'Trieu'
  };

  @ViewChild('Toggle') togglecomp;
  @ViewChild('nameForm', {read: ElementRef}) nameFormComp: ElementRef;
  @ViewChild('nameForm') nameFormComps;

  ngOnInit(): void {
    console.log('elementref', this.nameFormComp);
    console.log('elementref', this.nameFormComps);
    this.nameFormComp
  }

  ngAfterViewInit(): void {
    console.log('à elementref', this.nameFormComp.nativeElement);
    console.log('à elementref', this.nameFormComps.form);
    let nameControl = this.nameFormComps.form.controls['name'];
    console.log(nameControl);
  }

  toggleInside(){
    this.togglecomp.toggle();
  }

  onSubmit() {
    console.log('form', this.nameFormComp);
    console.log('form', this.nameFormComps.form.controls);
    let nameControl = this.nameFormComps.form.controls['name'];
    console.log(nameControl);
  }
  
  clickc() {
    this.nameFormComp.nativeElement.querySelector('#age').value = 'Hello';
  }
}
