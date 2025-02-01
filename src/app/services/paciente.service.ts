import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Paciente[]> {

    return this.http.get<Paciente[]>('http://localhost:8080/pacientes').pipe(
      map((response: any) => response._embedded.pacientes as Paciente[]),
    );
  }
}
