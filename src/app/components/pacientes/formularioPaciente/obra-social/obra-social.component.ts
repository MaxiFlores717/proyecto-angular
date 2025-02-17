import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormPacienteComponent } from '../form-paciente/form-paciente.component';

@Component({
  selector: 'app-obra-social',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormPacienteComponent],
  templateUrl: './obra-social.component.html',
  styleUrl: './obra-social.component.css'
})
export class ObraSocialComponent {

}
