import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/Services/educacion.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  esta_logeado = false;
  stateCourses:String = "";



  ngOnInit(): void {
    this.loadEducacion();
    if(this.tokenService.getToken()){
      this.esta_logeado = true;
    } else {
      this.esta_logeado  = false;
    }
  }
  loadEducacion(): void {
    this.educacionService.list().subscribe(data => {
      this.educacion = data
    })
  }

  delete(id?: number): void {
    if(id != undefined) {
      this.educacionService.delete(id).subscribe( data => {
        this.loadEducacion();
      }, err => {
        //alert("Algo no salió bien y no se pudo eliminar");
        this.loadEducacion();
      }
      )
    }
  }
  onClose() {
    this.loadEducacion()
  }




}
