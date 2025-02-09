import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../models/paciente';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { PacienteService } from '../../../services/paciente.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [Materi],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit{
  pacientes!: Paciente[];

  dtOptions: Config={};
  dttrigger: Subject<any>= new Subject<any>();

  constructor(private pacienteService: PacienteService){

  }
  ngOnInit(): void {
      this.cargarPaciente();
      this.dtOptions={
        pagingType: 'full_numbers',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        processing: true,
        ordering: true,
        search: {
          regex: true,
          caseInsensitive: true
        },
        data: this.pacientes,
        language: {
          search: "Buscar:",
          searchPlaceholder: "Ingrese paciente a buscar",
          lengthMenu: "Mostrar _MENU_ registros por página",
          info: "Mostrando página _PAGE_ de _PAGES_",
          paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
          },
          infoEmpty: "No hay datos disponibles en la tabla",
          zeroRecords: "No se encontraron coincidencias"
        }
        
      }


  }

  cargarPaciente(): void {
    this.pacienteService.findAll().subscribe(pacientes => {
      this.pacientes = pacientes;
      this.dttrigger.next(null);
    });
  }
  

}
