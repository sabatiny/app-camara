import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetoProvider } from '../../providers/projeto/projeto';

@IonicPage()
@Component({
  selector: 'page-resumo-projeto',
  templateUrl: 'resumo-projeto.html',
  providers: [
    ProjetoProvider
  ]
})
export class ResumoProjetoPage {
  public projeto;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private projetoProvider: ProjetoProvider
    ) {
      this.projeto = navParams.get('projetoSelecionado');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumoProjetoPage');
  }

}
