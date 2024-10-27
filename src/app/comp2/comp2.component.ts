import { Component } from '@angular/core';
import { someService } from '../some.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers:[someService]
})
export class Comp2Component  {
  userCount: number = 0;
 
  constructor(public service : someService) { }
  ngOnInit() {
    this.userCount = this.service.getUsers()
}
  getUsers(){
    this.userCount = this.service.getUsers()
  }

  addUser(){
    this.service.increaseUser()
    this.getUsers()
  }



}
