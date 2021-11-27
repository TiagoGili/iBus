import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarFavoritosPage } from './adicionar-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarFavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarFavoritosPageRoutingModule {}
