import { FirestoreService } from './../../services/firestore.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { Datos, MarkerI } from './../../models';
import { ModalSearchComponent } from './../../componentes/modal-search/modal-search.component';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  Component,
  OnInit,
  Input,
  Renderer2,
  Inject,
  ViewChild,
} from '@angular/core';
import { Geoposition } from '@ionic-native/geolocation';
import { ModalMapComponent } from 'src/app/componentes/modal-map/modal-map.component';
declare var google: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  @Input() position = {
    lat: -2.898116,
    lng: -78.9995331231,
  };

  usuarios: Datos[] = [];

  center = this.position;
  @ViewChild(GoogleMap, { static: false }) Map: GoogleMap;
  map: any;
  markerInit: any;
  infowindow: any;
  positionSet: any;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    public modalController: ModalController,
    public firestoreService: FirestoreService,
    private menuCtrl: MenuController,
    public navCtrl: NavController,
    public geolocation: Geolocation
  ) {
    this.getItems();
  }

  ngOnInit() {}

  //get the elements from database
  getItems() {
    const enlace = 'Usuarios';
    this.firestoreService
      .getCollectionChanges<Datos>(enlace)
      .subscribe((res) => {
        this.usuarios = res;
        this.loadMap();
      });
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    /*const indicatorsEle: HTMLElement = document.getElementById('indicators');*/

    var myStyles = [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ];
    this.map = new google.maps.Map(mapEle, {
      center: this.center,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      clickableIcons: false,
      styles: myStyles,
    });

    /* this.directionsDisplay.setMap(this.map); */
    /*this.directionsDisplay.setPanel(indicatorsEle);*/
    var image = {
      url: 'assets/imgs/icon-map2.png',
      scaledSize: new google.maps.Size(25, 35),
    };
    const marker = new google.maps.Marker({
      position: this.center,
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: true,
      icon: image,
    });

    this.usuarios.forEach((marker) => {
      this.addMarker(marker);
    });
  }
  //Adding the markers and the infowindow for each markers
  addMarker(marker: Datos) {
    var image = {
      url: 'assets/imgs/icon-map2.png',
      scaledSize: new google.maps.Size(25, 35),
    };
    const position = {
      lat: +marker.LATITUD,
      lng: +marker.LONGITUD,
    };

    const marker1 = new google.maps.Marker({
      position: position,
      map: this.map,
      draggable: false,
      icon: image,
    });
    /* 
    let infoWindowContent =
      '<div ' +
      '<div ' +
      '<h2> ' +
      marker.NOMBRE +
      '</h2>' +
      '<p> ' +
      marker.CIUDAD +
      '<p>' +
      '</div>';
    ('</div>');

    let usuarios = new google.maps.InfoWindow({
      content: infoWindowContent,
      maxWidth: 250,
    }); */

    marker1.addListener('click', () => {
      /* usuarios.open({
        anchor: marker1,
        map: this.map,
        shouldFocus: true,
      }); */
      this.modalMap();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalSearchComponent,
    });
    return await modal.present();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  async modalMap() {
    const modal = await this.modalController.create({
      component: ModalMapComponent,
      cssClass: 'modal-map',
      componentProps: {
        data: this.usuarios,
      },
      swipeToClose: true,
    });
    return await modal.present();
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      console.log(geoposition);
    });
  }
}
