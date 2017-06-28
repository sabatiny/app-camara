import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetorPage } from './setor';

@NgModule({
  declarations: [
    SetorPage,
  ],
  imports: [
    IonicPageModule.forChild(SetorPage),
  ],
  exports: [
    SetorPage
  ]
})
export class SetorPageModule {}
