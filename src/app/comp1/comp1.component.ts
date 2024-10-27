import { Component, OnInit } from '@angular/core';
import { someService } from '../some.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
