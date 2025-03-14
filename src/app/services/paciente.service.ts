import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url = 'http://localhost:8080/pacientes';

  
  private paciente: Paciente = new Paciente();

  constructor(private http: HttpClient) { }

  getPaciente(): Paciente{
    return this.paciente;
  }

  setPaciente(paciente: Paciente): void {
    this.paciente = paciente;
  }

  findAll(): Observable<Paciente[]> {

    return this.http.get<Paciente[]>('http://localhost:8080/pacientes').pipe(
      map((response: any) => response._embedded.pacientes as Paciente[]),
    );
  }
  create(paciente: Paciente): Observable<Paciente> {
  
    return this.http.post<Paciente>('http://localhost:8080/pacientes',paciente);
  }

  findById(id: number): Observable<Paciente>{
    return this.http.get<Paciente>(`${this.url}/${id}`);
  }
  // downloadPDF(id: number): Observable<Blob>{
  //   return this.http.get(`${this.url}/pdf/${id}`, { responseType: 'blob'});
  // }
}

