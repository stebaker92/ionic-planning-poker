import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal.html'
})
export class Modal {

  value: any;
  cardColor: string;

  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.value = this.params.get("value")
    this.cardColor = this.params.get("color")
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
