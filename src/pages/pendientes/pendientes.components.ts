import { Component } from '@angular/core';
import { DeseosServices } from '../../services/deseos.services';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.components.html'
})
export class PendientesPage {

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

  goAgregar(){
    

    const prompt = this.alertCtrl.create({
      title: 'Nueva lista',
      message: "Nombre de la nueva lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista'
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
          text: 'Agregar',
          handler: data => {
            console.log('Saved clicked');

            if (data.titulo.lenght === 0){
              return;
            }
            else{

              
              this.navCtrl.push( AgregarPage, {titulo: data.titulo} );
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