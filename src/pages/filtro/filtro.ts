import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeputadoProvider } from "../../providers/deputado/deputado";

/**
 * Generated class for the FiltroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
})
export class FiltroPage {

  public lista_deputados = new Array<any>();


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private deputadoProvider: DeputadoProvider
    ) {
  }

  ionViewDidLoad() {
    this.deputadoProvider.getDeputados().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        this.lista_deputados = objeto_retorno.dados
      },error=>{
        console.log(error)
      }
    )
  }

}
