import { Imagen } from "./imagen";

export class Paciente {
    id!: number;
    nombre!: string;
    apellido!: string;
    fechaNacimiento!: Date;
    telefono!: string;
    nacionalidad!: string;
    localidad!: string;
    dni!: number;
    imagenes!: Array<Imagen>;
}