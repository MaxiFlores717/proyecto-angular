import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domicilio } from '../models/domicilio';
import { map, Observable } from 'rxjs';
import { Paciente } from '../models/paciente';


@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  constructor(private http: HttpClient) { }
  
   findAll(): Observable<Domicilio[]> {
   
       return this.http.get<Domicilio[]>('http://localhost:8080/domicilios').pipe(
         map((response: any) => response._embedded.domicilios as Domicilio[]),
       );
     }
    create(domicilio: Domicilio): Observable<Domicilio> {
    
      return this.http.post<Domicilio>('http://localhost:8080/domicilios',domicilio);
    }

    private apiUrl = 'http://localhost:8080/api/domicilios';


    guardarDomicilio(domicilio: Domicilio): Observable<Domicilio> {
      return this.http.post<Domicilio>(`${this.apiUrl}/guardar`, domicilio);
    }
    

}
