import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/Models/jwt-dto';
import { LoginUsuario } from 'src/app/Models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'https://portfoliobackvrivaans.herokuapp.com/auth/';
  constructor(private httpClient: HttpClient) {

   }
   //public newUser(username: string, password: string)

   public login(loginUser: LoginUsuario): Observable<JwtDto> {
     return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUser);
   }
}
