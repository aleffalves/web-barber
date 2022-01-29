import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/UsuarioService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario;

  constructor( private usuarioService : UsuarioService,
              private router : Router ) { }

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
}
