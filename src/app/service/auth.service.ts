import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/User.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = "AIzaSyAj93dh_j-x8NgyrKvHB_plNwaEiBUaaCs";
  private userToken: string;

  constructor(private http: HttpClient) { 
    // this.getToken()
  }

  login() {

  }

  signUp(user: UserModel) {
    const  userData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, userData).pipe(
      map(res => {
        console.log("RSJX");
        this.saveToken(res['idToken']);
        return res;
      })
    )
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);
  }
}
