import { Paciente } from "./paciente";

export class Domicilio {
    id!: number;
    calle!: string;
    nrocalle!: number;
    barrio!: string;
    localidad!: string;

    paciente!: Paciente;
    id_paciente!: number;


}
