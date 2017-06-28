import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResumoProjetoPage } from '../../pages/resumo-projeto/resumo-projeto';
/**
 * Generated class for the EstadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estados',
  templateUrl: 'estados.html',
})
export class EstadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadosPage');
  }

  itemTapped($event, item) {
    this.navCtrl.push(ResumoProjetoPage, item);
  }

}
