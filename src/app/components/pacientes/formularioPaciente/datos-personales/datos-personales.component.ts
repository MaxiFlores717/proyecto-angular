import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paciente } from '../../../../models/paciente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPacienteComponent } from "../form-paciente/form-paciente.component";
import { ImagenesComponent } from '../imagenes/imagenes.component';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})
export class DatosPersonalesComponent implements OnInit{

  pacienteGuardar: Paciente = new Paciente();

  constructor(private pacienteService: PacienteService){}

  ngOnInit(): void {
      this.pacienteGuardar = this.pacienteService.getPaciente();
  }

  // onSave(){
  //   this.pacienteService.setPaciente(this.pacienteGuardar);
  // }

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