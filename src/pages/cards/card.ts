import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Modal } from '../../components/modal';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  items: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = ["?", 0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40];
  }

  itemSelected(item) {
    this.modalCtrl.create(Modal, { value: item, color: '#eefcff' }).present()
  }
}
