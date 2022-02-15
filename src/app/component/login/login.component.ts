import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Login';
import { Usuario } from 'src/app/model/Usuario';
import { LoginService } from 'src/app/service/LoginService.service';
import { UsuarioService } from 'src/app/service/UsuarioService.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario;
  usuarioLogin = new Login;
  mensagem : string = '';

  constructor( private usuarioService : UsuarioService, 
              private loginService : LoginService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  cadastroUsuario(usuario : Usuario){
    this.usuario.roles = ["USERS"];
    return this.usuarioService.cadastrarUsuario(usuario).subscribe(
      () => {
        window.location.reload();
        }
    )
  }

  toLogin(usuarioLogin : Login){
    return this.loginService.logar(usuarioLogin).subscribe( cadastro => {
      this.mensagem = "Login Sucessfull"
      const access_token = JSON.stringify(cadastro)
      localStorage.setItem('access_token',access_token)
      this.router.navigate(['home'])
      }
    )
  }
}
