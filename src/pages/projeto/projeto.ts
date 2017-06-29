import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetoProvider } from '../../providers/projeto/projeto';

/**
 * Generated class for the ProjetoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
  providers: [
    ProjetoProvider
  ]
})
export class ProjetoPage {

  public lista_projetos = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private projetoProvider: ProjetoProvider
    ) {
  }

  ionViewDidLoad() {
    this.projetoProvider.getProjetos().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
        this.lista_projetos = objeto_retorno.dados
      },error=>{
        console.log(error)
      }
    )

    this.projetoProvider.getProjetosReferencia().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
      },error=>{
        console.log(error)
      }
    )

  }

}
