import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import { ItemDeputadoPage } from '../../pages/item-deputado/item-deputado';
import { DeputadoProvider } from '../../providers/deputado/deputado'
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
  providers: [
    DeputadoProvider
  ]
})
export class DeputadoPage {

  public lista_deputados = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private deputadoProvider: DeputadoProvider) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde um momento..."
    });
    loader.present();
    this.deputadoProvider.getDeputados().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        this.lista_deputados = objeto_retorno.dados;
        loader.dismiss();
    },error=>{
        console.log(error)
      }
    )
  }
  seleciona(deputado){
    this.navCtrl.push(ItemDeputadoPage, { deputadoSelecionado: deputado })
  }

  

}
