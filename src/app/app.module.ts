import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './components/clientes/clientes.module';
import { DividasModule } from './components/dividas/dividas.module';
import { HttpClientModule } from '@angular/common/http';
import { TemplatesModule } from './components/templates/templates.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientesModule,
    DividasModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
