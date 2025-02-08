export class Domicilio {
    private id: number;
    private calle: string;
    private nro_calle: string;
    private barrio: string;
    private localidad: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNro_calle(): string {
        return this.nro_calle;
    }

    public setNro_calle(nro_calle: string): void {
        this.nro_calle = nro_calle;
    }

    public getBarrio(): string {
        return this.barrio;
    }

    public setBarrio(barrio: string): void {
        this.barrio = barrio;
    }

    public getLocalidad(): string {
        return this.localidad;
    }

    public setLocalidad(localidad: string): void {
        this.localidad = localidad;
    }


    constructor(){
        this.id = 0;
        this.calle = "";
        this.nro_calle = "";
        this.barrio = "";
        this.localidad = "";
    }
}
