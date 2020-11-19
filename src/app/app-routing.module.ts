import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const routes: Routes = [
  { path: 'fotos', component: FotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'fotos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
