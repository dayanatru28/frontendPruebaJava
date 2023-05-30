import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';

const routes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo:'/facturas',},
  {path: 'facturas', component: FacturasComponent },
  {path: 'adicionar/:idFactura', component: AdicionarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
