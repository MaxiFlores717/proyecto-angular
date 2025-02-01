import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PacientesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'React', 'spring boot'];

  setEnabled(): void{
    if(this.enabled==false){
      this.enabled = true
    }
    else{
      this.enabled = false
    }
  }
}
