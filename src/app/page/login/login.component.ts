import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../models/User.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  message: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.email = "";
    this.user.password = "";
  }

  public loginData(form: NgForm): void {
    if(form.invalid) {return;}
    else {
      this.auth.login(this.user).subscribe(res => {
        this.router.navigateByUrl('/home');
      },
      error => {
        if(error.error.error.message === 'INVALID_EMAIL') {
          this.message = "Correo electronico no registrado...";
        } else if(error.error.error.message === 'INVALID_PASSWORD') {
          this.message = "Contraseña incorrecta...";
        } else {
          alert('Plataforma en mantenimiento. Intentelo mas tarde!');
        }
      })
    }
  }

}
