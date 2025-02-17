import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../models/paciente';
import DataTables, { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { PacienteService } from '../../../services/paciente.service';
import DataTable from 'datatables.net-dt';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { DomicilioService } from '../../../services/domicilio.service';
import { Domicilio } from '../../../models/domicilio';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit{
  pacientes: Paciente[]=[];
  domicilios: Domicilio[]=[];


  dtOptions: Config={};
  dtTrigger: Subject<any>= new Subject<any>();

  constructor(private pacienteService: PacienteService, private domicilioService: DomicilioService){

  }
  ngOnInit(): void {
      this.cargarPaciente();
      this.dtOptions={
        pagingType: 'full_numbers',
        pageLength: 5,
        autoWidth: false,
        columnDefs: [
          { width: "5%", targets: 0},
          { width: "10%", targets: 1},
          { width: "10%", targets: 2},
          { width: "10%", targets: 3},
          { width: "10%", targets: 4}

        ],
        lengthMenu: [2, 5, 10, 25, 50],
        processing: true,
        ordering: true,
        search: {
          regex: true,
          caseInsensitive: true
        },
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

    this.domicilioService.findAll().subscribe(domicilios => {
      this.domicilios = domicilios; // Asigna los pacientes a la variable
      this.dtTrigger.next(null);
      
    });

  }
  

}
