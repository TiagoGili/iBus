import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarFavoritosPageRoutingModule } from './adicionar-favoritos-routing.module';

import { AdicionarFavoritosPage } from './adicionar-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarFavoritosPageRoutingModule
  ],
  declarations: [AdicionarFavoritosPage]
})
export class AdicionarFavoritosPageModule {}
