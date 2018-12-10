import { Component } from '@angular/core';
import { DeseosServices } from '../../services/deseos.services';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.components.html'
})
export class TerminadosPage {

  constructor(public deseosServices: DeseosServices) {

  }

  itemSelected(lista: Lista){
    console.log(lista);
  }
}