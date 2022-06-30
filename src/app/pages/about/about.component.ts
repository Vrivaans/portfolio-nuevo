import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  esta_logeado = true;
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
