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

  // public lista_deputados = new Array<any>();
  public deputado;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private deputadoProvider: DeputadoProvider
    ) {
      this.deputado = navParams.get('deputadoSelecionado');
  }

  ionViewDidLoad() {
    // this.deputadoProvider.getDeputados().subscribe(
    //   data=>{

    //     const response = (data as any);
    //     const objeto_retorno = JSON.parse(response._body);
    //     console.log(objeto_retorno);
    //     this.lista_deputados = objeto_retorno.dados
    //   },error=>{
    //     console.log(error)
    //   }
    // )

  }


}
