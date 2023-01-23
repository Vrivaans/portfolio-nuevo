import { user } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class userService {
  URL = 'https://green-pine-9470.fly.dev/'

  constructor(private http: HttpClient) {

  }
  public getUser(): Observable<user> {
      return this.http.get<user>(this.URL+"traer/usuario")
      //console.log("hola desde getUser");
  }

}
