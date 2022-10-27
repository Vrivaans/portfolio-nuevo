import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Descripcion } from '../Models/descripcion';

@Injectable({
  providedIn: 'root'
})
export class DescripcionService {
  URL = 'https://portfoliobackvrivaans.herokuapp.com/'
  constructor(private httpClient: HttpClient) { }
  public getDescripcion(): Observable<Descripcion> {
    return this.httpClient.get<Descripcion>(this.URL+'traer/descripcion/')
  }

  /*public details(id: number): Observable<Descripcion> {
    return this.httpClient.get<Descripcion>(this.URL+`/detail/${id}`)
  }*/


  /*public save(educacion: Des): Observable<any>{
    return this.httpClient.post<any>(this.URL+'crear/educacion',educacion)
  }*/
  public update(id: number = 1,descripcion: Descripcion): Observable<any>{
    return this.httpClient.put<any>(this.URL+`editar/descripcion/1`,descripcion)
  }
  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`borrar/educacion/${id}`)
  }*/

}
