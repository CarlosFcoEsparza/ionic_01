import { Component, Input } from '@angular/core';
import { DeseosServices } from '../../services/deseos.services';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'app-lista',
  templateUrl: 'lista.component.html'
})
export class ListaComponent {

    @Input() terminada: boolean = true;

  constructor(public deseosServices: DeseosServices,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  itemSelected(lista: Lista){
    this.navCtrl.push( AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    } );
    console.log(lista);
  }

  editarLista(lista: Lista, slidingItem: ItemSliding){
    slidingItem.close();
    const prompt = this.alertCtrl.create({
        title: 'Editar nombre',
        message: "Editar el nombre de la lista",
        inputs: [
          {
            name: 'titulo',
            placeholder: 'Nombre de la lista',
            value: lista.titulo
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Guardar',
            handler: data => {
              console.log('Saved clicked');
  
              if (data.titulo.lenght === 0){
                return;
              }
              else{
                lista.titulo = data.titulo;
                this.deseosServices.guardarStorege();
              }
  
            }
          }
        ]
      });
      prompt.present();
  }

  borrarLista(lista: Lista){
    this.deseosServices.borrarLista( lista );
  }
}