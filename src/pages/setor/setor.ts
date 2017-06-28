import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ResumoProjetoPage } from '../../pages/resumo-projeto/resumo-projeto';

@IonicPage()
@Component({
  selector: 'page-setor',
  templateUrl: 'setor.html',
})
export class SetorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetorPage');
  }

  itemTapped($event, item) {
    this.navCtrl.push(ResumoProjetoPage, item);
  }

}
