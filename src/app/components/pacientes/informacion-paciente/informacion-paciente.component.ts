import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-informacion-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion-paciente.component.html',
  styleUrl: './informacion-paciente.component.css'
})
export class InformacionPacienteComponent implements OnInit{
 
  currentDate = new Date().toLocaleDateString();

  imageLogoOdonto: string = "assets/images/icono2.jpg";
  imageNumero: string = "assets/images/01.png";


  pacienteId: number | undefined;
  pacienteEncontrado: Paciente | undefined;
  pacientePdf: Paciente | undefined;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pacienteId = Number(params.get('id') ?? '0');
      this.getPacienteDetails();
    });
  }


  getPacienteDetails(): void {
    if (this.pacienteId !== undefined) {
      console.log('ID solicitado:', this.pacienteId);
    this.pacienteService.findById(this.pacienteId).subscribe(
      (data: Paciente) => {
        console.log('Datos del paciente recibidos:', data);
        this.pacienteEncontrado = data;
      },
      error => {
        console.error('Error al obtener los detalles del paciente', error);
      }
    );
    }
  }

  //Método para generar el pdf, cuando lo genera el html se elimina

  downloadPdfPaciente(){
    {
      const pdfContent = `
      <div>
          <div class="title">
              HISTORIA CLÍNICA GENERAL
          </div>
          <div class="header">
              <div>
                  <img src="${this.imageLogoOdonto}" alt="Logo" class="logo" style="height: 60px;">
              </div>
              <div style="text-align: right;">
                  <img src="${this.imageNumero}" alt="Número" class="number" style="height: 50px;">
              </div>
          </div>
          <div class="content">
              <table class="table">
                  <tr>
                      <td>Lugar: Independencia 922</td>
                      <td>Fecha: ${this.currentDate}</td>
                  </tr>
              </table>
              <table class="table">
                  <tr>
                      <td>ODONTOLOGO: Nombre Apellido</td>
                      <td>N° Matrícula: 00000</td>
                  </tr>
              </table>
              <table class="table">
                  <tr>
                      <td>PACIENTE: ${this.pacienteEncontrado?.apellido} ${this.pacienteEncontrado?.nombre}</td>
                      <td>N° AFIL: 0000</td>
                  </tr>
              </table>
              <table class="table">
                  <tr>
                      <td>O. Social: ----------------</td>
                      <td>F. Nac.: ${this.pacienteEncontrado?.fechaNacimiento}</td>
                      <td>Tel.: ${this.pacienteEncontrado?.telefono}</td>
                  </tr>
              </table>
              <table class="table">
                  <tr>
                      <td>Edad: <!-- Insertar edad del paciente aquí --></td>
                      <td>Estado Civil: <!-- Insertar estado civil aquí --></td>
                      <td>Nacionalidad: ${this.pacienteEncontrado?.nacionalidad}</td>
                      <td>N° de Doc.: ${this.pacienteEncontrado?.dni}</td>
                      <td>Cel.: <!-- Insertar teléfono del paciente aquí --></td>
                  </tr>
              </table>
              <table class="table">
                  <tr>
                      <td>Domicilio (calle, num., barrio, localidad): -------</td>
                  </tr>
              </table>
              <table class="table">
                  <tr>
                      <td>Profesión/Actividad: ---------------------------------</td>
                      <td>Titular: ---------------------------------------</td>
                      <td>Lugar de Trabajo: ----------------------------</td>
                      <td>Jerarquí­a: -------------------------------------</td>
                  </tr>
              </table>
              <div class="content">
                  <strong>_____________________________________________________________________________</strong>
              </div>
              <div class="content">
                  <strong>ODONTROGRAMA:</strong>
              </div>
          </div>
      </div>
      `;
  
      const styles = `
      <style>
          .table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
          }
          .table th, .table td {
              border: 1px solid #ddd;
              padding: 8px;
          }
          .title {
              text-align: center;
              font-size: 16px;
              text-decoration: underline;
              margin: 10px 0;
          }
          .logo, .number {
              display: block;
              margin: 0 auto;
          }
          .header {
              width: 100%;
              display: flex;
              justify-content: space-between;
          }
          .header div {
              flex: 1;
          }
          .content {
              margin: 20px 0;
          }
      </style>
      `;
  
      const content = document.createElement('div');
      content.innerHTML = pdfContent + styles;
      document.body.appendChild(content);
  
      html2canvas(content).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('historia-clinica-general.pdf');
          document.body.removeChild(content);
      }).catch(error => {
          console.error('Error al generar el PDF:', error);
          document.body.removeChild(content);
      });
}
}
}

