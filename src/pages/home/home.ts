import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UlsterPage } from '../ulster/ulster';
import { MunsterPage } from '../munster/munster';
import { ConnaughtPage } from '../connaught/connaught';
import { LeinsterPage } from '../leinster/leinster';
import { DataBindingPage } from '../data-binding/data-binding';
import { UpdateStatusPage } from '../update-status/update-status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myStatus: string;

  constructor(public navCtrl: NavController) {

  }
  openUlster(){
    this.navCtrl.push(UlsterPage);
  }
  openMunster(){
    this.navCtrl.push(MunsterPage);
  }
  openConnaught(){
    this.navCtrl.push(ConnaughtPage);
  }
  openLeinster(){
    this.navCtrl.push(LeinsterPage);
  }
  openData(){
    this.navCtrl.push(DataBindingPage);
  }
  updateStatus(){
    this.navCtrl.push(UpdateStatusPage);
  }

}
