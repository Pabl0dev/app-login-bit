import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../models/User.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.email = "";
    this.user.name = "";
    this.user.password = "";
  }

  public sendData(form: NgForm): void {
    if(form.invalid) {return;}
    else {
      this.auth.signUp(this.user).subscribe(res => {
        alert("Usuario registrado!");
        this.router.navigateByUrl('/home');
      },
      error => {
        alert('Plataforma en mantenimiento. Intentelo mas tarde!');
      })
    }
  }

}
