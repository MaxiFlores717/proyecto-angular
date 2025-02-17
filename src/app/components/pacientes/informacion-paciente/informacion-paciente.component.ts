import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente';

@Component({
  selector: 'app-informacion-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion-paciente.component.html',
  styleUrl: './informacion-paciente.component.css'
})
export class InformacionPacienteComponent implements OnInit{
  pacienteDni: number | undefined;
  pacienteEncontrado: Paciente | undefined;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pacienteDni = Number(params.get('dni') ?? '0');
      this.getPacienteDetails();
    });
  }

  getPacienteDetails(): void {
    if (this.pacienteDni !== undefined) {
      console.log('DNI solicitado:', this.pacienteDni);
    this.pacienteService.findByDni(this.pacienteDni).subscribe(
      (data: Paciente) => {
        console.log('Datos del paciente recibidos:', data);
        this.pacienteEncontrado = data;
      },
      error => {
        console.error('Error al obtener los detalles del paciente', error);
      }
    );
    }
  }
}

