import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Horarios } from "../model/Horarios";

@Injectable({
    providedIn: 'root'
})
export class HorarioService {
    
    urlBase = environment.apiURLBase

    constructor(private http : HttpClient){}
    
    salvarHorario(horario: Horarios): Observable<any>{
        return this.http.post<any>(this.urlBase + '/api/horarios', horario)
    }

    buscarTodosHorarios(): Observable<Horarios[]>{
        return this.http.get<Horarios[]>(this.urlBase + '/api/horarios');
    }
}