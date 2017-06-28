import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DeputadoPageModule} from '../pages/deputado/deputado.module';
import { ItemDeputadoPageModule} from '../pages/item-deputado/item-deputado.module';
import { EstadosPageModule } from '../pages/estados/estados.module';
import { ResumoProjetoPageModule } from '../pages/resumo-projeto/resumo-projeto.module';
import { SetorPageModule } from '../pages/setor/setor.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DeputadoPageModule,
    ItemDeputadoPageModule,
    EstadosPageModule,
    ResumoProjetoPageModule,
    SetorPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
