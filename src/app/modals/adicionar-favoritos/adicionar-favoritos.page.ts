import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-favoritos',
  templateUrl: './adicionar-favoritos.page.html',
  styleUrls: ['./adicionar-favoritos.page.scss'],
})
export class AdicionarFavoritosPage implements OnInit {


  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
  }

  async sairAdicionarFavoritosPage() {
    await this.modalController.dismiss();
  }

}
