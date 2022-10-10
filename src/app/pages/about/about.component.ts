import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor(private router: Router, private tokenService: TokenService){}

  ngOnInit(): void {
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



  esta_logeado = false;
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
