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


  constructor(private http: HttpClient, private domicilioService: DomicilioService, private pacienteService: PacienteService) {
    this.pacientes = new Array<Paciente>;


  }

  ngOnInit() {
    this.pacienteService.findAll().subscribe(pacientes => this.pacientes = pacientes);
  }


  addPaciente(domicilio: Domicilio): void {
    this.pacienteService.create(domicilio.paciente).subscribe(pacienteNew => {
      console.log('Paciente guardado con éxito', pacienteNew);

      // Ahora que el paciente tiene un ID, lo asignamos al domicilio


      this.pacientes = [...this.pacientes, pacienteNew];

      const pacienteId = pacienteNew.id

      console.log("🔍 ID enviado a la API:", pacienteId, typeof pacienteId);


      this.http.post(`http://localhost:8080/api/domicilios/${pacienteId}`, domicilio)
        .subscribe(response => {
          console.log('Domicilio guardado', response);
        });


    });
  }
}
