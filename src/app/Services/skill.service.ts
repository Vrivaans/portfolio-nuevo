import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../Models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = 'https://green-pine-9470.fly.dev/'

  constructor(private httpClient: HttpClient, private router: Router) { }

  public list():Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.URL + 'traer/habilidades')
  }

  public detail(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `habilidad/detail/${id}`)
  }
  public save (skill:Skill):Observable<any>{
    return this.httpClient.post<Skill>(this.URL + 'crear/habilidad',skill)
  }
  public update (id:number, skill:Skill):Observable<any>{
    return this.httpClient.put<Skill>(this.URL + `editar/habilidad/${id}`, skill)
  }
  public delete (id:number):Observable<any>{
    return this.httpClient.delete<Skill>(this.URL + `borrar/habilidad/${id}`)
  }
}
