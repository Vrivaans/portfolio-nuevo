import { DescripcionService } from 'src/app/Services/descripcion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Descripcion } from 'src/app/Models/descripcion';

@Component({
  selector: 'app-edit-descripcion',
  templateUrl: './edit-descripcion.component.html',
  styleUrls: ['./edit-descripcion.component.scss']
})
export class EditDescripcionComponent implements OnInit {
  descripcion : Descripcion = null;

  constructor(private descripcionService: DescripcionService, private activateRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
   /* const id = this.activateRouter.snapshot.params['id'];
    this.descripcionService.detail(id).subscribe(
      data => {
        this.descripcion = data;

      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )*/
  }

  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.descripcionService.update(id, this.descripcion).subscribe(
      data => {
        this.router.navigate(['']);

      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
