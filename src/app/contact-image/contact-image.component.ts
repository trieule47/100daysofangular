import {Component, Input, OnInit} from '@angular/core';

@Component ({
    selector: 'contact-image',
    template: `
    <div>
        <p> {{image}}</p>
        <ng-content></ng-content>
    </div>
    `,
    inputs: ['image'],
    })
export class ContactImageComponent implements OnInit{
    _imageUrl;

    // @Input() set image(value:string){
    set image(value:string){
        this._imageUrl = value;
    }

    get image():string {
        return this._imageUrl;
    }

    ngOnInit(): void {
        if (!this._imageUrl) {
            alert('null imageUrl');
        }
    }

}