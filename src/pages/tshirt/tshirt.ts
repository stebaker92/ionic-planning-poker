import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Modal } from '../../components/modal';

@Component({
  selector: 'page-tshirt',
  templateUrl: 'tshirt.html'
})
export class TshirtPage {
  items: string[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = ["?", "XS", "S", "M", "L", "XL"];
  }

  itemSelected(item: string) {
    this.modalCtrl.create(Modal, { value: item }).present()
  }
}
