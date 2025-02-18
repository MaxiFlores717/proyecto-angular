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

    // public getId(): number {
    //     return this.id;
    // }

    // public setId(id: number): void {
    //     this.id = id;
    // }

    // public getNombre(): string {
    //     return this.nombre;
    // }

    // public setNombre(nombre: string): void {
    //     this.nombre = nombre;
    // }

    // public getApellido(): string {
    //     return this.apellido;
    // }

    // public setApellido(apellido: string): void {
    //     this.apellido = apellido;
    // }

    // public getFechaNacimiento(): Date {
    //     return this.fechaNacimiento;
    // }

    // public setFechaNacimiento(fechaNacimiento: Date): void {
    //     this.fechaNacimiento = fechaNacimiento;
    // }

    // public getTelefono(): string {
    //     return this.telefono;
    // }

    // public setTelefono(telefono: string): void {
    //     this.telefono = telefono;
    // }

    // public getNacionalidad(): string {
    //     return this.nacionalidad;
    // }

    // public setNacionalidad(nacionalidad: string): void {
    //     this.nacionalidad = nacionalidad;
    // }

    // public getLocalidad(): string {
    //     return this.localidad;
    // }

    // public setLocalidad(localidad: string): void {
    //     this.localidad = localidad;
    // }

    // public getDni(): number {
    //     return this.dni;
    // }

    // public setDni(dni: number): void {
    //     this.dni = dni;
    // }

    // public getImagenes(): Array<Imagen> {
    //     return this.imagenes;
    // }

    // public setImagenes(imagenes: Array<Imagen>): void {
    //     this.imagenes = imagenes;
    // }

    // constructor(){
    //     this.id = 0;
    //     this.nombre = "";
    //     this.apellido = "";
    //     this.fechaNacimiento = new Date();
    //     this.telefono = "";
    //     this.nacionalidad = "";
    //     this.localidad = "";
    //     this.dni = 0;
    //     this.imagenes = new Array<Imagen>;
    // }

}
