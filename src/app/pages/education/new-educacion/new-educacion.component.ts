import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/Services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.scss']
})
export class NewEducacionComponent implements OnInit {

  nameCertification =""
  expeditionDate =""
  nameInstitution = ""
  enCurso = false

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  reLoadList():void {
    window.location.reload();
  }

  onCreate(): void {
    const educacion = new Educacion(this.nameCertification, this.expeditionDate, this.nameInstitution, this.enCurso)
    this.educacionService.save(educacion).subscribe(data => {
      alert("La educación se agregó correctamente");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Hubo un problema y no se pudo agregar")
      this.router.navigate(['']);
      window.location.reload();
    }
    )
  }

}

/*
onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data=>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
*/
