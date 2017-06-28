import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeputadoPage } from './deputado';

@NgModule({
  declarations: [
    DeputadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DeputadoPage),
  ],
  exports: [
    DeputadoPage
  ]
})
export class DeputadoPageModule {}
