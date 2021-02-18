import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit() {
    this.user.email = "";
    this.user.name = "";
    this.user.password = "";
  }

  public sendData(form: NgForm): void {
    console.log(form);
  }

}
