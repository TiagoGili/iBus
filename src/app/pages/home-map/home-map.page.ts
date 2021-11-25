import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.page.html',
  styleUrls: ['./home-map.page.scss'],
})
export class HomeMapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: google.maps.Map;

  constructor() { }

  ionViewWillEnter(){
    this.exibirMapa();
  }

  exibirMapa(): void{

    const posicao = new google.maps.LatLng(-22.208066098274095, -49.954102695829);
    const opcoes = {
      center: posicao,
      zoom: 15,
      disableDefaulUI: false
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);
  }

}
