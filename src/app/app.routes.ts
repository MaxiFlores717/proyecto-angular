import { Routes } from '@angular/router';
import { FormPacienteComponent } from './components/pacientes/formularioPaciente/form-paciente/form-paciente.component';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

import { DataTableComponent } from './components/pacientes/data-table/data-table.component';
import { InformacionPacienteComponent } from './components/pacientes/informacion-paciente/informacion-paciente.component';
import { DatosPersonalesComponent } from './components/pacientes/formularioPaciente/datos-personales/datos-personales.component';
import { ImagenesComponent } from './components/pacientes/formularioPaciente/imagenes/imagenes.component';
import { ObraSocialComponent } from './components/pacientes/formularioPaciente/obra-social/obra-social.component';
import { HistoriaMedicaComponent } from './components/pacientes/formularioPaciente/historia-medica/historia-medica.component';
import { HistoriaOdontologicaComponent } from './components/pacientes/formularioPaciente/historia-odontologica/historia-odontologica.component';
import { OdontogramaComponent } from './components/pacientes/formularioPaciente/odontograma/odontograma.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pacientes', component: DataTableComponent },
    { path: 'paciente/informacionPacientes/:id', component: InformacionPacienteComponent },
    //Formulario del Paciente
    { path: 'formPaciente', component: FormPacienteComponent, 
        children: [
          { path: 'datosPersonales', component: DatosPersonalesComponent },
          { path: 'imagenes', component: ImagenesComponent },
          { path: 'obraSocial', component: ObraSocialComponent },
          { path: 'historiaMedica', component: HistoriaMedicaComponent },
          { path: 'historiaOdontologica', component: HistoriaOdontologicaComponent },
          { path: 'odontograma', component: OdontogramaComponent },
          { path: '', redirectTo: 'datosPersonales', pathMatch: 'full' },
        ] 
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
       
];
