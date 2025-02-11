import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [FormPacienteComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent  implements OnInit{
  pacientes: Paciente[] = [];
  pacienteSelected: Paciente = new Paciente();


  constructor(private pacienteService: PacienteService){
  this.pacientes = new Array<Paciente>;
    
  }

  ngOnInit(){
    this.pacienteService.findAll().subscribe(pacientes => this.pacientes = pacientes);
  }
  addPaciente(paciente: Paciente): void {

  
      this.pacienteService.create(paciente).subscribe(pacienteNew => {
        // this.products.push({ ...productNew });
        this.pacientes = [... this.pacientes, { ...pacienteNew }];
      })

      this.pacienteSelected = new Paciente();
    
    
  }

}
