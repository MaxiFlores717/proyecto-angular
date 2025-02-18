import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from '../../../../../models/paciente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPacienteComponent } from "../form-paciente.component";
import { ImagenesComponent } from '../../imagenes/imagenes.component';
import { PacienteService } from '../../../../../services/paciente.service';
import { DomicilioService } from '../../../../../services/domicilio.service';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from '../../../../../models/domicilio';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})
export class DatosPersonalesComponent implements OnInit{

  pacienteGuardar: Paciente = new Paciente();
  domicilioGuardar: Domicilio = new Domicilio();


  constructor(private http: HttpClient, private domicilioService: DomicilioService, private pacienteService: PacienteService) {
    this.pacientes = new Array<Paciente>;
  }

  ngOnInit(): void {
      this.pacienteGuardar = this.pacienteService.getPaciente();
      this.domicilioGuardar = new Domicilio;

      this.pacienteService.findAll().subscribe(pacientes => this.pacientes = pacientes);
  }

  @Input() domicilio = {
      calle: '',
      nrocalle: 0,
      barrio: '',
      localidad: '',
      paciente: {
        nombre: '',
        apellido: '',
        dni: 0,
        telefono: '',
        nacionalidad: '',
        fechanacimiento: new Date(),
        imagenes: []
      }
    }
  
  
    @Output() newPacienteEvent = new EventEmitter();
  
    pacientes: Paciente[]=[];
    
    onSubmit(): void {
      this.domicilio.paciente.apellido = this.pacienteGuardar.apellido;
      this.domicilio.paciente.nombre = this.pacienteGuardar.nombre;
      this.domicilio.paciente.dni = this.pacienteGuardar.dni;
      this.domicilio.paciente.telefono = this.pacienteGuardar.telefono;
      this.domicilio.paciente.nacionalidad = this.pacienteGuardar.nacionalidad;
      this.domicilio.paciente.fechanacimiento = this.pacienteGuardar.fechanacimiento;
      this.domicilio.barrio = this.domicilioGuardar.barrio;
      this.domicilio.calle = this.domicilioGuardar.calle;
      this.domicilio.nrocalle = this.domicilioGuardar.nrocalle;
      this.domicilio.localidad = this.domicilioGuardar.localidad;
      
      this.newPacienteEvent.emit(this.domicilio);
    }

  // onSave(){
  //   this.pacienteService.setPaciente(this.pacienteGuardar);
  // }


}