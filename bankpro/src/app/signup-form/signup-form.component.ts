import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../userRegistration';
import {Location} from '@angular/common';
//import {UserDataService} from '../service/userDataService';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

//user=new UserRegistration;
//submitted=false;


  constructor() { }

  ngOnInit() {
  }

/*
newUser():void{
  this.submitted=false;
  this.user=new UserRegistration();
}

private save():void{
  this.userDataService.create(this.user);
}

onSubmit(){
this.submitted=true;
this.save();
}


goBack():void{
this.location.back();
}

*/


}
