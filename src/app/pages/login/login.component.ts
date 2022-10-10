import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Models/login-usuario';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;
  isLoginFail: boolean = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string
  password!: string;
  roles: string[] = [] ;
  errMsj!: string;



  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {

   }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
     this.authService.login(this.loginUsuario).subscribe(
      data => {this.isLogged = true;
        this.isLogged = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles  = data.authorities;
        this.router.navigate([''])
      }, err => {this.isLogged = false
                  this.isLoginFail = true;
                this.errMsj = err.error.mensaje;
              console.log(this.errMsj);}
    );
  }

}
