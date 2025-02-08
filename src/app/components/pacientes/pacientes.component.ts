import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent  implements OnInit{
  pacientes: Paciente[] = [];

  constructor(private service: PacienteService){
  this.pacientes = new Array<Paciente>;
    
  }

  ngOnInit(){
    this.service.findAll().subscribe(pacientes => this.pacientes = pacientes);
  }

}
