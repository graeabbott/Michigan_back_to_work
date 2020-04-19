import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { TemperaturePage } from '../pages/temperature/temperature'
import { SymptomsPage } from '../pages/symptoms/symptoms'
import { MedicalPage } from '../pages/medical/medical'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TemperaturePage,
    SymptomsPage,
    MedicalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TemperaturePage,
    SymptomsPage,
    MedicalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
