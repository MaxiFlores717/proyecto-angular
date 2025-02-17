import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormPacienteComponent } from '../form-paciente/form-paciente.component';

@Component({
  selector: 'app-historia-odontologica',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, FormPacienteComponent],
  templateUrl: './historia-odontologica.component.html',
  styleUrl: './historia-odontologica.component.css'
})
export class HistoriaOdontologicaComponent {
  /*-------------------------- Variables --------------------------------------------- */
  medicacionOdonto: string = '';
   dolor: string = '';
   golpeDiente: string = '';
   encias: string = '';
   pus: string = '';
   caraHinchada: string = '';

   fondoAzulMedicacionOdonto: boolean = false;
   fondoAzulDolor: boolean = false;
   fondoAzulGolpeDiente: boolean = false;
   fondoAzulEncias: boolean = false;
   fondoAzulPus: boolean = false;
   fondoAzulCaraHinchada: boolean = false;

   /*------------------------- Medicaciíon Odonto ----------------------------------------*/
 
   mostrarPreguntaMedicacionOdonto() {
    if (this.medicacionOdonto === 'si') {
      this.fondoAzulMedicacionOdonto = true;
      setTimeout(() => {
        this.fondoAzulMedicacionOdonto = false;
      }, 800); // Desaparece después de 0.8 segundos
    }
    else if (this.medicacionOdonto === 'no') {
      this.fondoAzulMedicacionOdonto = false;
    }
  }

  /*------------------------- Dolor ----------------------------------------*/

  mostrarPreguntaDolor() {
    if (this.dolor === 'si') {
      this.fondoAzulDolor = true;
      setTimeout(() => {
        this.fondoAzulDolor = false;
      }, 800); // Desaparece después de 0.8 segundos
    }
    else if (this.dolor === 'no') {
      this.fondoAzulDolor = false;
    }
  }

  /*------------------------- Golpe Diente ----------------------------------------*/

  mostrarPreguntaGolpeDiente() {
    if (this.golpeDiente === 'si') {
      this.fondoAzulGolpeDiente = true;
      setTimeout(() => {
        this.fondoAzulGolpeDiente = false;
      }, 800); // Desaparece después de 0.8 segundos
    }
    else if (this.golpeDiente === 'no') {
      this.fondoAzulGolpeDiente = false;
    }
  }

  /*------------------------ Encias ----------------------------------------*/

  mostrarPreguntaEncias() {
    if (this.encias === 'si') {
      this.fondoAzulEncias = true;
      setTimeout(() => {
        this.fondoAzulEncias = false;
      }, 800); // Desaparece después de 0.8 segundos
    }
    else if (this.encias === 'no') {
      this.fondoAzulEncias = false;
    }
  }

  /*------------------------ Pus ----------------------------------------*/

  mostrarPreguntaPus() {
    if (this.pus === 'si') {
      this.fondoAzulPus = true;
      setTimeout(() => {
        this.fondoAzulPus = false;
      }, 800); // Desaparece después de 0.8 segundos
    }
    else if (this.pus === 'no') {
      this.fondoAzulPus = false;
    }
  }

  /*------------------------ Cara Hinchada ----------------------------------------*/

  mostrarPreguntaCaraHinchada() {
    if (this.caraHinchada === 'si') {
      this.fondoAzulCaraHinchada = true;
      setTimeout(() => {
        this.fondoAzulCaraHinchada = false;
      }, 800); // Desaparece después de 0.8 segundos
    }
    else if (this.caraHinchada === 'no') {
      this.fondoAzulCaraHinchada = false;
    }
  }



}
