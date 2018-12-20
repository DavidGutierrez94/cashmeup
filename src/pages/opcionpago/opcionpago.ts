import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import {SModalPage} from '../s-modal/s-modal';

import {RModalPage} from '../r-modal/r-modal';

/**
 * Generated class for the OpcionpagoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-opcionpago',
  templateUrl: 'opcionpago.html',
})
export class OpcionpagoPage {

  smodal=SModalPage;
  rmodal=RModalPage;


  active: boolean;
  headerImage:any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController,  public modalCtrl: ModalController) {
  }

  showLoginModal() {
    const modalOptions: ModalOptions = {
      cssClass: "signInModal"
    };
    const modal = this.modalCtrl.create("SModalPage", {}, modalOptions);
    modal.present();
  }

}
