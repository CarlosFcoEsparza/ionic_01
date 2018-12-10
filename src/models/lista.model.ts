import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadoEn: Date;
    terminado: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {
        this.titulo = titulo;
        this.terminado = false;
        this.terminadoEn = null;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();

    }
}