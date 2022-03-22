import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor() { }

    obterToken() {
        const tokenString = localStorage.getItem('access_token')
        if (tokenString) {
            const token = JSON.parse(tokenString).token
            return token;
        }
        return null;
    }

    encerrarSessao(){
        localStorage.removeItem('access_token')
    }

    obterLoginLogado(){
        const tokenString = localStorage.getItem('access_token')
        if (tokenString) {
            const login = JSON.parse(tokenString).login
            return login;
        }
        return null;
    }

    isAuthenticated(): boolean {
        const token = this.obterToken();
        if (token) {
            const expirated = this.jwtHelper.isTokenExpired(token)
            return !expirated;
        }
        return false;
    }
}