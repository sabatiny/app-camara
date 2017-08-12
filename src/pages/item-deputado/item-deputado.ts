import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeputadoProvider } from '../../providers/deputado/deputado'
/**
 * Generated class for the ItemDeputadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-item-deputado',
  templateUrl: 'item-deputado.html',
  providers: [
    DeputadoProvider
  ]
})
export class ItemDeputadoPage {
  public deputado;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private deputadoProvider: DeputadoProvider
    ) {
      this.deputado = navParams.get('deputadoSelecionado');
  }

  ionViewDidLoad() {

  }


}
