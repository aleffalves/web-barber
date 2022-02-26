import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  hide = true

  usuario = new Usuario;
  usuarioLogin = new Login;

  constructor( private usuarioService : UsuarioService, 
              private loginService : LoginService,
              private router : Router,
              private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  cadastroUsuario(usuario : Usuario){
    this.usuario.roles = ["USERS"];
    return this.usuarioService.cadastrarUsuario(usuario).subscribe(
      () => {
        this.snackBar.open('Cadastro efetuado com Sucesso','Sucesso',{
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass:['green-snapback']
        })
        window.location.reload();
        },
        error => {
          this.snackBar.open('Cadastro não efetuado, verifique seus dados corretamente!',
           'Falha',{
             duration: 2000,
             horizontalPosition: 'right',
             verticalPosition: 'top',
             panelClass: ['red-snapback']
           })
        } 
    )
  }

  toLogin(usuarioLogin : Login){
    return this.loginService.logar(usuarioLogin).subscribe( cadastro => {
      const access_token = JSON.stringify(cadastro)
      localStorage.setItem('access_token',access_token)
      this.snackBar.open('Login Autorizado!','SUCESSO!',{
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass:['green-snapback']
      })
      this.router.navigate(['home'])
      },
      error => {
        this.snackBar.open('Login e/ou Senha Inválido!','FALHA!',{
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['red-snapback']
        })
      }
    )
  }
}
