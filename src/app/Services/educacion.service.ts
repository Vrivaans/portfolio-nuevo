import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Educacion } from '../Models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://portfoliobackvrivaans.herokuapp.com/'
  //URL = 'http://localhost:8080/'
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL+'traer/educacion')
  }

  public details(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL+`educacion/detail/${id}`)
  }
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL+'crear/educacion',educacion)
  }
  public update(id: number,educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL+`editar/educacion/${id}`,educacion)
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`borrar/educacion/${id}`)
  }
}
