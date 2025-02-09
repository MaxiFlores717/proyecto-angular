import { Routes } from '@angular/router';
import { FormPacienteComponent } from './components/form-paciente/form-paciente.component';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { InformacionPacienteComponent } from './components/informacion-paciente/informacion-paciente.component';
import { DataTableComponent } from './components/pacientes/data-table/data-table.component';

export const routes: Routes = [
    { path: 'formPaciente', component: FormPacienteComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pacientes', component: DataTableComponent },
    { path: 'informacionPacientes', component: InformacionPacienteComponent }
];
