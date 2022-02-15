import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../model/Login";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    readonly url: string = 'http://localhost:8080/api/login/';

    constructor(private http: HttpClient){}

    logar(usuario : Login): Observable<Login>{
     return this.http.post<Login>(`${this.url}`, usuario);
    }
}
