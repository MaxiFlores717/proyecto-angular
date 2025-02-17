import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormPacienteComponent } from '../form-paciente/form-paciente.component';

@Component({
  selector: 'app-odontograma',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormPacienteComponent],
  templateUrl: './odontograma.component.html',
  styleUrl: './odontograma.component.css'
})
export class OdontogramaComponent {

}
