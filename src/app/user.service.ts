import { EventEmitter } from "events";
import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    users =[
        new User('Jomy', 16, 'HCM', '123', 'a'),
        new User('Heny', 23, 'SG', '234', 'x'),
        new User('Anessy', 19, 'HN', '456', 'c'),
        new User('Moagan', 36, 'ĐN', '987', 'b'),
    ];

    showDetails = new EventEmitter();

    getListUser(){
        return this.users;
    }

    onShowDetail(user){
        this.showDetails.emit(user);
    }
}