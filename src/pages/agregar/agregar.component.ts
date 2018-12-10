import { Component } from '@angular/core';
import { DeseosServices } from '../../services/deseos.services';
import { NavParams, Item } from 'ionic-angular';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'agregar-terminados',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

    lista: Lista;
    nombreItem: string;


  constructor(public deseosServices: DeseosServices,
                private navParams: NavParams) {

    const titulo = this.navParams.get('titulo');

    //primero busca si lista contiene informacion, si no, crea una lista nueva
    if (this.navParams.get( 'lista' )){
      this.lista = this.navParams.get( 'lista' );
    }else{
      this.lista = new Lista( titulo );
      this.deseosServices.agregarLista( this.lista );
    }

    
  }

  agregarItem(){
      if (this.nombreItem.length === 0) {
          return;
      }
      console.log(this.nombreItem)
      

      const nuevoItem = new ListaItem(this.nombreItem);
      this.lista.items.push( nuevoItem );

      this.deseosServices.guardarStorege();
      this.nombreItem = '';
      
  }

  actualizarTares( item: ListaItem ){
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemDate => {
      console.log(itemDate.completado);
      return !itemDate.completado
    }).length;

    if (pendientes === 0){
      this.lista.terminado = true;
      this.lista.terminadoEn = new Date();
    }
    else{
      this.lista.terminado = false;
      this.lista.terminadoEn = null;
    }

    this.deseosServices.guardarStorege();
  }

  borrar(idx: number){
      console.log("borrar id: " + idx);
      this.lista.items.splice( idx, 1);
      this.deseosServices.guardarStorege();
      console.log(this.lista);
  }
}