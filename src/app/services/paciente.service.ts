import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Paciente } from '../models/paciente';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from '../models/domicilio';
import { DomicilioService } from './domicilio.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient, private domicilioService: DomicilioService) { }

  findAll(): Observable<Paciente[]> {

    return this.http.get<Paciente[]>('http://localhost:8080/pacientes').pipe(
      map((response: any) => response._embedded.pacientes as Paciente[]),
    );
  }
  
  create(paciente: Paciente): Observable<Paciente> {
    return this.domicilioService.create(paciente.domicilio).pipe(
      switchMap(domicilioNuevo => {
        paciente.domicilio = domicilioNuevo; // Asignamos el domicilio ya guardado
        return this.http.post<Paciente>('http://localhost:8080/pacientes', paciente);
      })
    );
  
  
  }
}
