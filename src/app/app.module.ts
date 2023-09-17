import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes =[
  {path: 'principal', component: PrincipalComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
