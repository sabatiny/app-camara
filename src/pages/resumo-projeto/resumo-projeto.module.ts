import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumoProjetoPage } from './resumo-projeto';

@NgModule({
  declarations: [
    ResumoProjetoPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumoProjetoPage),
  ],
  exports: [
    ResumoProjetoPage
  ]
})
export class ResumoProjetoPageModule {}
