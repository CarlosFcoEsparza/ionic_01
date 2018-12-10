import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable()
export class DeseosServices{
    listas: Lista[] = [];

    constructor() {
        this.cargarStorage();
    }

    agregarLista( lista: Lista){
        this.listas.push( lista );
        this.guardarStorege();
    }

    guardarStorege(){
        localStorage.setItem( 'data', JSON.stringify( this.listas )  );
    }

    cargarStorage(){
        if ( localStorage.getItem( 'data' ) ){
            this.listas = JSON.parse(localStorage.getItem( 'data' ));
        }
        else{
            this.listas = [];
        }
    }

    borrarLista( lista: Lista ){
        this.listas = this.listas.filter( listData => {
            return listData.id !== lista.id;
        });
    
        this.guardarStorege();
    }
}