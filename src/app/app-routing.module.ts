import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InvestigadorComponent } from './components/investigador/investigador.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ExportarComponent } from './components/exportar/exportar.component';


const routes: Routes = [
  { path: 'buscar', component: BusquedaComponent},
  { path: 'agregar', component: AgregarComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'exportar', component: ExportarComponent},
  { path: 'investigador/:id', component: InvestigadorComponent},
  { path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
