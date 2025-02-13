import { Domicilio } from "./domicilio";
import { Imagen } from "./imagen";

export class Paciente {
    id!: number;
    nombre!: string;
    apellido!: string;
    fechaNacimiento!: Date;
    telefono!: string;
    nacionalidad!: string;
    domicilio!: Domicilio;
    dni!: number;
    imagenes!: Array<Imagen>;

    
}