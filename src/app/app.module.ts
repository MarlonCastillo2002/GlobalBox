import { Firestore } from '@angular/fire/firestore';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ModalSearchComponent } from './componentes/modal-search/modal-search.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment.prod';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompraComponent } from './pages/compra/compra.component';
import { SocioestrategicoComponent } from './pages/socioestrategico/socioestrategico.component';
import { InicioComponent } from './pages/login/inicio.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { ModalComponent } from './componentes/modal/modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalMapComponent } from './componentes/modal-map/modal-map.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    SocioestrategicoComponent,
    InicioComponent,
    PrincipalComponent,
    ModalSearchComponent,
    MapaComponent,
    ModalComponent,
    ModalMapComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    Ng2SearchPipeModule,
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
