import { Domicilio } from "./domicilio";
import { Imagen } from "./imagen";

export class Paciente {
    id!: number;
    nombre!: string;
    apellido!: string;
    fechanacimiento!: Date;
    telefono!: string;
    nacionalidad!: string;
    dni!: number;
    imagenes?: Array<Imagen>;
     
}