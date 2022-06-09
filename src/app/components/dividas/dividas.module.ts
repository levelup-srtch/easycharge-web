import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DividaListaComponent } from './divida-lista/divida-lista.component';
import { DividaComponent } from './divida/divida.component';
import { DividaListaTabelaComponent } from './divida-lista/divida-lista-tabela/divida-lista-tabela.component';


@NgModule({
  declarations: [
    DividaListaComponent,
    DividaComponent,
    DividaListaTabelaComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class DividasModule { }
