import { Paciente } from "./paciente";

export class Domicilio {
    id!: number;
    calle!: string;
    nrocalle!: number;
    barrio!: string;
    localidad!: string;

    paciente!: Paciente;
    id_paciente!: number;

    constructor() {
        this.id = 0;
        this.id_paciente = 0;
        this.calle = "";
        this.nrocalle = 0;
        this.barrio = "";
        this.localidad = "";
        this.paciente = new Paciente(); // Asegurar que paciente no sea undefined
      }
}
