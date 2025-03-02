import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prueba-pdf.component.html',
  styleUrl: './prueba-pdf.component.css'
})
export class PruebaPdfComponent {
  imageLogoOdonto: string = "assets/images/icono2.jpg";
  imageNumero: string = "assets/images/01.png";

  imagen1: string = "assets/images/Limpieza-dental.jpg";
  imagen2: string = "assets/images/Ortodoncia2.jpg";
  imagen3: string = "assets/images/Implante-dental.jpg";


  imagenes: String[] = [this.imagen1, this.imagen2, this.imagen3];

}
