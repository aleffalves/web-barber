import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Login';
import { Usuario } from 'src/app/model/Usuario';
import { LoginService } from 'src/app/service/LoginService';
import { UsuarioService } from 'src/app/service/UsuarioService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario;
  usuarioLogin = new Login;

  constructor( private usuarioService : UsuarioService, 
              private loginService : LoginService,
              private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  cadastroUsuario(usuario : Usuario){
    return this.usuarioService.cadastrarUsuario(usuario).subscribe(
      () => {
        window.location.reload();
        }
    )
  }

  toLogin(usuarioLogin : Login){
    return this.loginService.logar(usuarioLogin).subscribe( ()=> {   this.router.navigate(['home'])}
    )
  }
}
