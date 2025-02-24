import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Paciente } from '../../../../models/paciente';
import { PacienteService } from '../../../../services/paciente.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Domicilio } from '../../../../models/domicilio';
import { HttpClient } from '@angular/common/http';
import { DomicilioService } from '../../../../services/domicilio.service';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
declare var $: any;

@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet, DatosPersonalesComponent],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css'
})
export class FormPacienteComponent{

  pacientes: Paciente[] = [];

  domicilioGuardar: Domicilio = new Domicilio();
  pacienteGuardar: Paciente = new Paciente();


  constructor(private http: HttpClient, private domicilioService: DomicilioService, private pacienteService: PacienteService) {
    this.pacientes = new Array<Paciente>;


  }

  ngOnInit() {
    this.pacienteService.findAll().subscribe(pacientes => this.pacientes = pacientes);
  }


  onSubmit() {
    this.pacienteService.create(this.domicilioGuardar.paciente).subscribe(pacienteNew => {
      console.log('Paciente guardado con éxito', pacienteNew);

      // Ahora que el paciente tiene un ID, lo asignamos al domicilio


      this.pacientes = [...this.pacientes, pacienteNew];

      const pacienteId = pacienteNew.id

      //console.log("🔍 ID enviado a la API:", pacienteId, typeof pacienteId);


      this.http.post(`http://localhost:8080/api/domicilios/${pacienteId}`, this.domicilioGuardar)
      .subscribe(response => {
        console.log('Domicilio guardado', response);
        
        });


    });
  }

  addDomicilio(domicilio: Domicilio): void {

    this.domicilioGuardar.paciente.apellido = domicilio.paciente.apellido;
    this.domicilioGuardar.paciente.nombre = domicilio.paciente.nombre;
    this.domicilioGuardar.paciente.dni = domicilio.paciente.dni;
    this.domicilioGuardar.paciente.telefono = domicilio.paciente.telefono;
    this.domicilioGuardar.paciente.nacionalidad = domicilio.paciente.nacionalidad;
    this.domicilioGuardar.paciente.fechaNacimiento = domicilio.paciente.fechaNacimiento;
    this.domicilioGuardar.barrio = domicilio.barrio;
    this.domicilioGuardar.calle = domicilio.calle;
    this.domicilioGuardar.nrocalle = domicilio.nrocalle;
    this.domicilioGuardar.localidad = domicilio.localidad;

    
  }
}
