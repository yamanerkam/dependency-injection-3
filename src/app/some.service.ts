import { Injectable } from "@angular/core";

@Injectable()
export class someService{
    numberOfUsers : number = 0;
    getUsers(){
        return this.numberOfUsers
    }

    increaseUser(){
        this.numberOfUsers += 1;
    }
}   