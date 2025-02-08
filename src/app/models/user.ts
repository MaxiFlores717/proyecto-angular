export class User {
    private id: number;
    private nombre: string;
    private apellido: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }



    constructor(){
        this.id = 0;
        this.nombre = "";
        this.apellido = "";
    }
}
