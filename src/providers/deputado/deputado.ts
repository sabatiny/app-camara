import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeputadoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeputadoProvider {
  private baseApiPath = "https://dadosabertos.camara.leg.br/api/v2";

  constructor(public http: Http) {
    console.log('Hello DeputadoProvider Provider');
  }

  getDeputados(){
  return this.http.get(this.baseApiPath + "/deputados");

  }

}
