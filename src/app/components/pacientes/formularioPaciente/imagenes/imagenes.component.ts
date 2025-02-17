import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormPacienteComponent } from '../form-paciente/form-paciente.component';
import { CommonModule } from '@angular/common';
import { Paciente } from '../../../../models/paciente';
import { PacienteService } from '../../../../services/paciente.service';
import { Imagen } from '../../../../models/imagen';

@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent implements OnInit{

  paciente: Paciente = new Paciente();
    imagenes: Imagen[] = [];

    constructor(private pacienteService: PacienteService){}
  
    ngOnInit(): void {
        this.paciente = this.pacienteService.getPaciente();
        this.imagenes = this.paciente.imagenes || [];

        if (this.imagenes.length === 0) {
        this.imagenes.push({ id: 1, url: '' });
    }
    }
  
    onSave(){
      this.pacienteService.setPaciente(this.paciente);
    }

    agregarImagen() {
      this.imagenes.push({ id: this.imagenes.length + 1, url: '' }); // Agrega un nuevo input
    }

  guardarImagen(event: any, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imagenes[index].url = e.target.result;
      this.paciente.imagenes = this.imagenes; // Actualiza el arreglo de imágenes en el paciente
      this.pacienteService.setPaciente(this.paciente); // Guarda el paciente en el servicio
    };

    reader.readAsDataURL(file);
  }

}
