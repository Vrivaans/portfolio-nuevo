import { user } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class userService {
  url:string = 'http://localhost:8080/traer/';

  constructor(private http: HttpClient) {

  }
  public getUser(): Observable<user> {
      return this.http.get<user>(this.url+"usuario")
      console.log("hola desde getUser");
  }

}
