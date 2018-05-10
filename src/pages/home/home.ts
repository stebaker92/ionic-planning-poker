import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from './modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: number[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = [0, 0.5, 1, 2, 3, 5, 8, 13, 21];
  }

  itemSelected(item) {
    console.log("click")
    this.modalCtrl.create(ModalPage, { number: item }).present()
  }
}
