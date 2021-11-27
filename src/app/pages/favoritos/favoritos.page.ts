import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdicionarFavoritosPage } from 'src/app/modals/adicionar-favoritos/adicionar-favoritos.page';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async abrirAdicionarFavoritosPage() {
    const modal = await this.modalController.create({
      component: AdicionarFavoritosPage
    });

    return await modal.present();
  }

}
