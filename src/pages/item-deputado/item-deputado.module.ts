import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDeputadoPage } from './item-deputado';

@NgModule({
  declarations: [
    ItemDeputadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDeputadoPage),
  ],
  exports: [
    ItemDeputadoPage
  ]
})
export class ItemDeputadoPageModule {}
