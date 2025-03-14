import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormPacienteComponent } from '../form-paciente/form-paciente.component';

@Component({
  selector: 'app-historia-medica',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, FormPacienteComponent],
  templateUrl: './historia-medica.component.html',
  styleUrl: './historia-medica.component.css'
})
export class HistoriaMedicaComponent implements AfterViewInit{
   /*------------------------- Variables ----------------------------------------*/
   tieneHermanos: string = '';
   enfermedad: string = '';
   deporte: string = '';
   droga: string = '';
   fiebre: string = '';
   diabetes: string = '';
   cardiaco: string = '';
   aspirina: string = '';
   chagas: string = '';
   hepatitis: string = '';
   hepatico: string = '';
   epileptico: string = '';
   infecto: string = '';
   operado: string = '';
   respiratorio: string = '';
   embarazada: string = '';
   recomendacionMedica: string = '';
   
   fondoAzulHermanos: boolean = false;
   fondoAzulEnfermedad: boolean = false;
   fondoAzulDeporte: boolean = false;
   fondoAzulDroga: boolean = false;
   fondoAzulFiebre: boolean = false;
   fondoAzulDiabetes: boolean = false;
   fondoAzulCardiaco: boolean = false;
   fondoAzulAspirina: boolean = false;
   fondoAzulChagas: boolean = false;
   fondoAzulHepatitis: boolean = false;
   fondoAzulHepatico: boolean = false;
   fondoAzulEpileptico: boolean = false;
   fondoAzulInfecto: boolean = false;
   fondoAzulOperado: boolean = false;
   fondoAzulRespiratio: boolean = false;
   fondoAzulEmbarazada: boolean = false;
   fondoAzulRecomendacionMedica: boolean = false;

   
 
   /*------------------------- Preguntas ----------------------------------------*/
 
   /*-------------------------  Hermanos  ----------------------------------------*/
 
 
   mostrarPregunta() {
     if (this.tieneHermanos === 'si') {
       this.fondoAzulHermanos = true;
       setTimeout(() => {
         this.fondoAzulHermanos = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.tieneHermanos === 'no') {
       this.fondoAzulHermanos = false;
     }
   }
 
   reiniciarPregunta() {
     this.tieneHermanos = 'no';
     this.fondoAzulHermanos = false;
   }
 
   /*------------------------- Enfermedad ----------------------------------------*/
 
   mostrarPreguntaEnfermedad() {
     if (this.enfermedad === 'si') {
       this.fondoAzulEnfermedad = true;
       setTimeout(() => {
         this.fondoAzulEnfermedad = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.enfermedad === 'no') {
       this.fondoAzulEnfermedad = false;
     }
   }
 
   /*-------------------------  Deporte ----------------------------------------*/
 
   mostrarPreguntaDeporte() {
     if (this.deporte === 'si') {
       this.fondoAzulDeporte = true;
       setTimeout(() => {
         this.fondoAzulDeporte = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.deporte === 'no') {
       this.fondoAzulDeporte = false;
     }
   }
 
 
   /*------------------------- Droga ----------------------------------------*/
 
   mostrarPreguntaDroga() {
     if (this.droga === 'si') {
       this.fondoAzulDroga = true;
       setTimeout(() => {
         this.fondoAzulDroga = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.droga === 'no') {
       this.fondoAzulDroga = false;
     }
   }
 
   /*------------------------- Fiebre Reumatica ----------------------------------------*/
 
   mostrarPreguntaFiebre() {
     if (this.fiebre === 'si') {
       this.fondoAzulFiebre = true;
       setTimeout(() => {
         this.fondoAzulFiebre = false;
       }, 800); // Desaparece después de 0.8 segundos
     } else if (this.fiebre === 'no') {
       this.fondoAzulFiebre = false;
     }
   }
 
   /*------------------------- Diabetes ----------------------------------------*/
 
   mostrarPreguntaDiabetes() {
     if (this.diabetes === 'si') {
       this.fondoAzulDiabetes = true;
       setTimeout(() => {
         this.fondoAzulDiabetes = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.diabetes === 'no') {
       this.fondoAzulDiabetes = false;
     }
   }
 
   /*------------------------- Cardiaco ----------------------------------------*/
 
   mostrarPreguntaCardiaco() {
     if (this.cardiaco === 'si') {
       this.fondoAzulCardiaco = true;
       setTimeout(() => {
         this.fondoAzulCardiaco = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.cardiaco === 'no') {
       this.fondoAzulCardiaco = false;
     }
   }
 
   /*------------------------- Aspirina ----------------------------------------*/
 
   mostrarPreguntaAspirina() {
     if (this.aspirina === 'aspirina' || this.aspirina === 'anticoagulante') {
       this.fondoAzulAspirina = true;
       setTimeout(() => {
         this.fondoAzulAspirina = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.aspirina === 'ninguna') {
       this.fondoAzulAspirina = false;
     }
   }
 
 
   /*------------------------- Chagas ----------------------------------------*/
 
   mostrarPreguntaChagas() {
     if (this.chagas === 'si') {
       this.fondoAzulChagas = true;
       setTimeout(() => {
         this.fondoAzulChagas = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.chagas === 'no') {
       this.fondoAzulChagas = false;
     }
   }
 
   /*------------------------- Hepatitis ----------------------------------------*/
 
   mostrarPreguntaHepatitis() {
     if (this.hepatitis === 'si') {
       this.fondoAzulHepatitis = true;
       setTimeout(() => {
         this.fondoAzulHepatitis = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.hepatitis === 'no') {
       this.fondoAzulHepatitis = false;
     }
   }
 
   /*------------------------- Hepatico ----------------------------------------*/
 
   mostrarPreguntaHepatico() {
     if (this.hepatico === 'si') {
       this.fondoAzulHepatico = true;
       setTimeout(() => {
         this.fondoAzulHepatico = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.hepatico === 'no') {
       this.fondoAzulHepatico = false;
     }
   }
 
   /*------------------------- Epileptico ----------------------------------------*/
 
   mostrarPreguntaEpileptico() {
     if (this.epileptico === 'si') {
       this.fondoAzulEpileptico = true;
       setTimeout(() => {
         this.fondoAzulEpileptico = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.epileptico === 'no') {
       this.fondoAzulEpileptico = false;
     }
   }
 
   /*------------------------- Infecto ----------------------------------------*/
 
   mostrarPreguntaInfecto() {
     if (this.infecto === 'si') {
       this.fondoAzulInfecto = true;
       setTimeout(() => {
         this.fondoAzulInfecto = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.infecto === 'no') {
       this.fondoAzulInfecto = false;
     }
   }
 
   /*------------------------- Operado ----------------------------------------*/
 
   mostrarPreguntaOperado() {
     if (this.operado === 'si') {
       this.fondoAzulOperado = true;
       setTimeout(() => {
         this.fondoAzulOperado = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.operado === 'no') {
       this.fondoAzulOperado = false;
     }
   }
 
   /*------------------------- Respiratorio ----------------------------------------*/
 
   mostrarPreguntaRespiratorio() {
     if (this.respiratorio === 'si') {
       this.fondoAzulRespiratio = true;
       setTimeout(() => {
         this.fondoAzulRespiratio = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.respiratorio === 'no') {
       this.fondoAzulRespiratio = false;
     }
   }
 
   /*------------------------- Embarazo ----------------------------------------*/
 
   mostrarPreguntaEmbarazo() {
     if (this.embarazada === 'si') {
       this.fondoAzulEmbarazada = true;
       setTimeout(() => {
         this.fondoAzulEmbarazada = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.embarazada === 'no') {
       this.fondoAzulEmbarazada = false;
     }
   }
 
   /*------------------------- Recomendación Médica ----------------------------------------*/
 
   mostrarPreguntaRecomendacionM() {
     if (this.recomendacionMedica === 'si') {
       this.fondoAzulRecomendacionMedica = true;
       setTimeout(() => {
         this.fondoAzulRecomendacionMedica = false;
       }, 800); // Desaparece después de 0.8 segundos
     }
     else if (this.recomendacionMedica === 'no') {
       this.fondoAzulRecomendacionMedica = false;
     }
   }
 
   ngAfterViewInit() {
     // Verificar que jQuery esté disponible
     if (typeof $ !== 'undefined') {
       console.log('jQuery versión:', $.fn.jquery);
     } else {
       console.error('jQuery no está definido');
     }
   }

}
