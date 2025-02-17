import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Paciente } from '../../../models/paciente';
import { PacienteService } from '../../../services/paciente.service';
import { Domicilio } from '../../../models/domicilio';
import { DomicilioService } from '../../../services/domicilio.service';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-form-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css'
})
export class FormPacienteComponent implements AfterViewInit, OnInit {

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
  medicacionOdonto: string = '';
  dolor: string = '';
  golpeDiente: string = '';
  encias: string = '';
  pus: string = '';
  caraHinchada: string = '';
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
  fondoAzulMedicacionOdonto: boolean = false;
  fondoAzulDolor: boolean = false;
  fondoAzulGolpeDiente: boolean = false;
  fondoAzulEncias: boolean = false;
  fondoAzulPus: boolean = false;
  fondoAzulCaraHinchada: boolean = false;


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

  imagenes: any[] = []; // Arreglo para almacenar los inputs

  agregarImagen() {
    this.imagenes.push({}); // Agrega un nuevo input al array
  }

  ngAfterViewInit() {
    // Verificar que jQuery esté disponible
    if (typeof $ !== 'undefined') {
      console.log('jQuery versión:', $.fn.jquery);
    } else {
      console.error('jQuery no está definido');
    }
  }

  initTabs() {
    // Agregar tu lógica de inicialización de pestañas aquí si es necesario
  }

  nextTab(tabId: string) {
    const tabTrigger = document.querySelector(`[data-bs-target="${tabId}"]`);
    const tabContent = document.querySelector(tabId);
    if (tabTrigger && tabContent) {
      const tab = new bootstrap.Tab(tabTrigger);
      tab.show();
      tabContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Elemento no encontrado:', tabId);
    }
  }
  /*
    paciente: any;
    domicilio: any;
  
    domicilios: Domicilio[] = [];
  
    constructor(private pacienteService: PacienteService, private domicilioService: DomicilioService) {
      this.inicializarDomicilio();
      this.inicializarPaciente();
      this.domicilioService.findAll().subscribe(domicilios => this.domicilios = domicilios);
    }
  
    inicializarPaciente() {
      this.paciente = {
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        nacionalidad: '',
        fechaNacimiento: '',
        domicilio: new Domicilio
      };
    }
  
    inicializarDomicilio() {
      this.domicilio = {
        calle: '',
        nroCalle: 0,
        barrio: '',
        localidad: ''
      };
    }
  
    setDomicilio() {
      this.paciente.domicilio = { ...this.domicilio };
      console.log(this.paciente.domicilio);
    }
    
    onSubmit(form: any): void {
      if (form.valid) {
        this.domicilioService.create(this.domicilio).subscribe(domicilioNew => {
          this.setDomicilio();
          
          console.log(this.paciente);
        });
          this.pacienteService.create(this.paciente).subscribe(() => {
            alert('Paciente guardado');
  
            form.resetForm();
            this.inicializarPaciente();
            this.inicializarDomicilio();
          });
        
      } else {
        alert('Completa todos los campos');
      }
    }
      */

  pacienteReal = new Paciente();
  domicilioReal = new Domicilio();


  paciente = {
    nombre: '',
    apellido: '',
    dni: null,
    telefono: '',
    nacionalidad: '',
    fechanacimiento: null,
    imagenes: []
  }

  domicilio = {
    calle: '',
    nrocalle: 0,
    barrio: '',
    localidad: '',
    paciente: this.paciente
  }

  pacientes: Paciente[] = [];


  constructor(private http: HttpClient, private domicilioService: DomicilioService, private pacienteService: PacienteService) {
    this.pacientes = new Array<Paciente>;


  }

  ngOnInit() {
    this.pacienteService.findAll().subscribe(pacientes => this.pacientes = pacientes);
  }

  guardarPaciente() {

    this.domicilioReal.barrio = this.domicilio.barrio;
    this.domicilioReal.calle = this.domicilio.calle;
    this.domicilioReal.localidad = this.domicilio.localidad;
    this.domicilioReal.nrocalle = this.domicilio.nrocalle;


    this.pacienteReal.apellido = this.paciente.apellido;
    this.pacienteReal.nombre = this.paciente.nombre;

    this.pacienteService.create(this.pacienteReal).subscribe(pacienteNew => {
      console.log('Paciente guardado con éxito', pacienteNew);

      // Ahora que el paciente tiene un ID, lo asignamos al domicilio


      this.pacientes = [...this.pacientes, pacienteNew];

      const pacienteId = pacienteNew.id

      console.log("🔍 ID enviado a la API:", pacienteId, typeof pacienteId);


      this.http.post(`http://localhost:8080/api/domicilios/${pacienteId}`, this.domicilioReal)
        .subscribe(response => {
          console.log('Domicilio guardado', response);
        });


    });

    /*
    this.pacienteReal.apellido = this.paciente.apellido;
    this.http.post<any>('http://localhost:8080/pacientes', this.pacienteReal)
    .subscribe(response => {

      console.log(response.id)
      this.domicilioReal.paciente = response;
      console.log(this.domicilioReal)
      
      this.domicilioReal.barrio= this.domicilio.barrio;
      // Ahora guardamos el domicilio
      this.http.post('http://localhost:8080/domicilios', this.domicilioReal)
        .subscribe(response => {
          console.log('Domicilio guardado con éxito', response);
          alert('Domicilio guardado con éxito');
        }, error => {
          console.error('Error al guardar el domicilio', error);
        });

    }, error => {
      console.error('Error al guardar el paciente', error);
    });
    */
  }
}
