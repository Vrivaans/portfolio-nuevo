import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Descripcion } from 'src/app/Models/descripcion';
import { DescripcionService } from 'src/app/Services/descripcion.service';
import { TokenService } from 'src/app/Services/token.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  esta_logeado = false;
  descripcion: Descripcion;

  constructor(private router: Router, private tokenService: TokenService, private descripcionService: DescripcionService){}

  ngOnInit(): void {
    this.loadDescripcion()
    if(this.tokenService.getToken()){
      this.esta_logeado = true;
    }else{
      this.esta_logeado = false;
    }

  }

  onLogOut(): void {
      this.tokenService.logOut();
      window.location.reload();
  }
  loadDescripcion(): void{
    this.descripcionService.getDescripcion().subscribe(data => {
      this.descripcion = data
    })
  }





  borrarFotoPerfil(){
    console.log("estoy borrando :v")
  }
  editarFotoPerfil(){
    console.log("estoy editando :v")
  }
  borrarAboutMe(){
    console.log("estoy borrando el about me :v")
  }
  editarAboutMe(){
    console.log("estoy editando el about me :v")
  }

}
