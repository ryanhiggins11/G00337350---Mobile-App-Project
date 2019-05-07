import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataBindingPage } from './data-binding';

@NgModule({
  declarations: [
    DataBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(DataBindingPage),
  ],
})
export class DataBindingPageModule {}
