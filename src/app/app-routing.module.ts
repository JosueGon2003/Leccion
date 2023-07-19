import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TransportesComponent } from './components/transportes/transportes.component';
import { TransporteComponent } from './components/transporte/transporte.component';

const routes: Routes = [
{path: 'home', component: HomeComponent}, 
{path: 'about', component: AboutComponent}, 
{path: 'transportes', component: TransportesComponent}, 
{path: 'transporte/:id', component: TransporteComponent}, 

{path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
