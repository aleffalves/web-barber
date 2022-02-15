import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../model/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{
    
    readonly url: string = 'http://localhost:8080/api/usuario/';

    constructor(private http: HttpClient){}

    cadastrarUsuario(usuario : Usuario): Observable<Usuario>{
     return this.http.post<Usuario>(`${this.url}`, usuario);
    }
}