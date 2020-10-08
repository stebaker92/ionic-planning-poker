import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal.html'
})
export class Modal {

  value: any;
  cardClass: string;

  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.value = this.params.get("value")
    this.cardClass = this.params.get("cardClass")
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
