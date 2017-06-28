import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemDeputadoPage } from '../../pages/item-deputado/item-deputado';
/**
 * Generated class for the DeputadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deputado',
  templateUrl: 'deputado.html',
})
export class DeputadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeputadoPage');
  }

  itemTapped($event, item) {
    this.navCtrl.push(ItemDeputadoPage, item);
  }

}
