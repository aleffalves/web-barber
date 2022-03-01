import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../model/Usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{
    
    // readonly url: string = 'http://localhost:8080/api/usuario/';

    readonly url: string = environment.apiURLBase

    constructor(private http: HttpClient){}

    cadastrarUsuario(usuario : Usuario): Observable<Usuario>{
     return this.http.post<Usuario>(`${this.url}/api/usuario/`, usuario);
    }
}