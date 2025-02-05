import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageVista1: string = "assets/images/vista1.jpg";
  imageVista2: string = "assets/images/vista2.jpg";
  imageVista3: string = "assets/images/vista3.jpg";
  imageHorarios: string = "assets/images/Horarios.heic";
  imageDireccion: string = "assets/images/Direccion-clinica.png";
  imageLimpieza: string = "assets/images/Limpieza-dental.jpg";
  imageOrtodoncia: string = "assets/images/Ortodoncia2.jpg";
  imageEndodoncia: string = "assets/images/Endodoncia.jpg";
  imageImplante: string = "assets/images/Implante-dental.jpg";
  imageDecodificacion: string = "assets/images/Decodificacion-dental.heic";

  imageOdontoPediatria: string = "assets/images/Odontopediatria.heic";
  imageBlanqueamiento: string = "assets/images/Blanqueamiento.heic";
  imageCirugia: string = "assets/images/Cirugia-dental.heic";
  imageEstetica: string = "assets/images/Estetica.jpg";
  
}
