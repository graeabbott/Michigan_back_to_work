import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SymptomsPage } from './symptoms';

@NgModule({
  declarations: [
    SymptomsPage,
  ],
  imports: [
    IonicPageModule.forChild(SymptomsPage),
  ],
})
export class SymptomsPageModule {}
