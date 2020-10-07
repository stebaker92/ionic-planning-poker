import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Modal } from '../../components/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = ["?", 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40];
  }

  itemSelected(item) {
    console.log("click")
    this.modalCtrl.create(Modal, { number: item }).present()
  }
}
