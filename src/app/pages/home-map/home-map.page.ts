import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.page.html',
  styleUrls: ['./home-map.page.scss'],
})
export class HomeMapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: google.maps.Map;
  minhaPosicao: google.maps.LatLng;

  constructor(private geolocation: Geolocation) { }

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

    this.buscarPosicao();
  }

  buscarPosicao(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.minhaPosicao = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    
      this.irParaPosicao();
    }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  irParaPosicao(){
    this.map.setCenter(this.minhaPosicao);
    this.map.setZoom(15);

    new google.maps.Marker({
      position: this.minhaPosicao,
      map: this.map,
      title: "Minha Posição",
      animation: google.maps.Animation.BOUNCE
    });
  }
}
