import { MapaComponent } from './pages/mapa/mapa.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './pages/compra/compra.component';

import { SocioestrategicoComponent } from './pages/socioestrategico/socioestrategico.component';
import { InicioComponent } from './pages/login/inicio.component';

const routes: Routes = [
  {
    path: 'comprar',
    component: CompraComponent,
  },
  {
    path: 'socioestrategico',
    component: SocioestrategicoComponent,
  },
  {
    path: 'login',
    component: InicioComponent,
  },
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'map',
    component: MapaComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
