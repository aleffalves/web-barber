import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Login } from "../model/Login";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    // readonly url: string = 'http://localhost:8080/api/login/';

    readonly url: string = environment.apiURLBase

    constructor(private http: HttpClient){}

    logar(usuario : Login): Observable<Login>{
     return this.http.post<Login>(`${this.url}/api/login`, usuario);
    }
}
