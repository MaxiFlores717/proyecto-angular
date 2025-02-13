import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { routes } from '../../app.routes';
import { Domicilio } from '../../models/domicilio';
import { DomicilioService } from '../../services/domicilio.service';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [FormPacienteComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacienteSelected: Paciente = new Paciente();

  domicilios: Domicilio[] = [];
  domicilioSelected: Domicilio = new Domicilio();


  constructor(private pacienteService: PacienteService, private domicilioService: DomicilioService) {
    this.pacientes = new Array<Paciente>;

  }

  ngOnInit() {
    this.pacienteService.findAll().subscribe(pacientes => this.pacientes = pacientes);
    this.domicilioService.findAll().subscribe(domicilios => this.domicilios = domicilios);

  }
  addPaciente(paciente: Paciente): void {
    if (paciente.domicilio) {
      paciente.domicilio.id = null; // ✅ Eliminar el ID para que Spring Boot lo genere
    }

    console.log('Paciente a enviar:', paciente); // ✅ Verificar datos antes de enviar

  this.domicilioService.create(paciente.domicilio).subscribe({
    next: domicilioNew => {
      this.domicilios = [...this.domicilios, { ...domicilioNew }];
      
      paciente.domicilio = domicilioNew; // ✅ Asegurar que el paciente tenga un domicilio válido antes de enviarlo

      this.pacienteService.create(paciente).subscribe({
        next: pacienteNew => {
          this.pacientes = [...this.pacientes, { ...pacienteNew }];
        },
        error: err => console.error('Error al crear paciente:', err) // ✅ Verificar si hay otro error
      });
    },
    error: err => console.error('Error al crear domicilio:', err) // ✅ Capturar errores de domicilio
  });

  this.pacienteSelected = new Paciente();




  }

}
