import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMapPageRoutingModule } from './home-map-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HomeMapPage } from './home-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMapPageRoutingModule
  ],
  declarations: [HomeMapPage],
  providers: [Geolocation]
})
export class HomeMapPageModule {}
