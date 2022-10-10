import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../Models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL: string = 'http://localhost:8080/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL+'traer/experiencias');
  }
  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.URL+'crear/experiencia', experience)
  }
  //Arreglar en back, poque todavía no funciona
  public update(id:number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.URL+`editar/experiencia/${id}`, experience)
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+`borrar/experience/${id}`)
  }

}
