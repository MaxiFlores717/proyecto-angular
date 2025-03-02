import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class InformacionPacienteComponent implements OnInit {

    currentDate = new Date().toLocaleDateString();

    imageLogoOdonto: string = "assets/images/icono2.jpg";
    imageNumero: string = "assets/images/01.png";


    pacienteId: number | undefined;
    pacienteEncontrado: Paciente | undefined;
    pacientePdf: Paciente | undefined;

    constructor(private pacienteService: PacienteService, private route: ActivatedRoute) { }

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

    downloadPdfPaciente() {
        {
            const pdfContent = `
      <div class="container">
    <div class="header">
        <div class="logo-container">
            <img src="${this.imageLogoOdonto}" alt="Logo" class="logo">
            <h1>Clínica Odontológica Equilibrio dental</h1>
        </div>
    </div>

        <div class="separator"></div>


    <div class="title">
        Datos Personales del Paciente
    </div>

    <div class="content">
        <div class="datosPersonales row">
        <div class="tablaPaciente col-8">
        <table class="table">
            <tr>
                <td><strong>Lugar:</strong> Independencia 922</td>
                <td><strong>Fecha:</strong> ${this.currentDate}</td>
            </tr>
        </table>

        <table class="table">
            <tr>
                <td><strong>ODONTÓLOGO:</strong> Nombre Apellido</td>
                <td><strong>N° Matrícula:</strong> 00000</td>
            </tr>
        </table>

        <table class="table">
            <tr>
                <td><strong>PACIENTE:</strong> ${this.pacienteEncontrado?.apellido} ${this.pacienteEncontrado?.nombre}</td>
                <td><strong>N° AFIL:</strong> 0000</td>
            </tr>
        </table>

        <table class="table">
            <tr>
                <td><strong>O. Social:</strong> ----------------</td>
                <td><strong>F. Nac.:</strong> ${this.pacienteEncontrado?.fechaNacimiento}</td>
                <td><strong>Tel.:</strong> ${this.pacienteEncontrado?.telefono}</td>
            </tr>
        </table>

        <table class="table">
            <tr>
                <td><strong>Edad:</strong> <!-- Edad aquí --></td>
                <td><strong>Estado Civil:</strong> <!-- Estado civil aquí --></td>
                <td><strong>Nacionalidad:</strong> ${this.pacienteEncontrado?.nacionalidad}</td>
                <td><strong>N° de Doc.:</strong> ${this.pacienteEncontrado?.dni}</td>
                <td><strong>Cel.:</strong> <!-- Celular aquí --></td>
            </tr>
        </table>

        <table class="table">
            <tr>
                <td><strong>Domicilio:</strong> (calle, num., barrio, localidad) -------</td>
            </tr>
        </table>

        <table class="table">
            <tr>
                <td><strong>Profesión/Actividad:</strong> ---------------------------------</td>
                <td><strong>Titular:</strong> ---------------------------------------</td>
                <td><strong>Lugar de Trabajo:</strong> ----------------------------</td>
                <td><strong>Jerarquía:</strong> -------------------------------------</td>
            </tr>
        </table>
        </div>
        <div class="imagenPaciente col-4">
                <img src="${this.imageNumero}" alt="paciente" class="paciente" width="370px" height="320px">
        </div>
        </div>

        <div class="separator"></div>

        <div class="title">
            <strong>ODONTOGRAMA:</strong>
        </div>
    </div>
</div>
      `;

            const styles = `
      <style>
    body {
        font-family: Arial, sans-serif;
    }

    .container {
        width: 100%;
        padding: 20px;
    }

    .title {
        text-align: center;
        font-size: 22px;
        text-decoration: underline;
        margin-bottom: 15px;
        font-weight: bold;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .logo-container, .number-container {
        flex: 1;
        text-align: center;
    }

    .logo {
        height: 65px;
        border-radius: 40px;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 15px;
    }

    .table td {
        border: 1px solid #ddd;
        padding: 10px;
        font-size: 14px;
    }
    .paciente{
        border-radius: 15px;
    }

    .separator {
        margin: 20px 0;
        border-top: 2px solid #000;
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

