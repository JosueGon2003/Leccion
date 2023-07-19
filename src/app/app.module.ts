import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TransportesComponent } from './components/transportes/transportes.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { FiltroPipe } from './pipers/filtro.pipe';
import { FiltroTPipe } from './pipers/filtro-t.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    TransportesComponent,
    TransporteComponent,
    FiltroPipe,
    FiltroTPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
