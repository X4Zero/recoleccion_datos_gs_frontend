import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InvestigadorComponent } from './components/investigador/investigador.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { NoceroPipe } from './pipes/nocero.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ExportarComponent } from './components/exportar/exportar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    InicioComponent,
    InvestigadorComponent,
    BusquedaComponent,
    AgregarComponent,
    NoceroPipe,
    NoimagePipe,
    ExportarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
