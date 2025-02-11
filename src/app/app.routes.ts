import { Routes } from '@angular/router';
import { FormPacienteComponent } from './components/pacientes/form-paciente/form-paciente.component';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

import { DataTableComponent } from './components/pacientes/data-table/data-table.component';
import { InformacionPacienteComponent } from './components/pacientes/informacion-paciente/informacion-paciente.component';

export const routes: Routes = [
    { path: 'formPaciente', component: PacientesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pacientes', component: DataTableComponent },
    { path: 'informacionPacientes', component: InformacionPacienteComponent }
];
