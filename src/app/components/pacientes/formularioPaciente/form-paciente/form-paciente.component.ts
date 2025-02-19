import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Paciente } from '../../../../models/paciente';
import { PacienteService } from '../../../../services/paciente.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css'
})
export class FormPacienteComponent{



  @Input() paciente: Paciente = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: 0,
    fechanacimiento: new Date(),
    telefono: '',
    nacionalidad: '',
    localidad: '',
    imagenes: [],
  };

  @Output() newPacienteEvent = new EventEmitter();

  pacientes: Paciente[]=[];

  onSubmit(): void {
    this.newPacienteEvent.emit(this.paciente);


   /* this.pacienteService.create(this.paciente).subscribe(pacienteNew => {
      this.pacientes.push({ ...pacienteNew});
    })*/
  }
}
