import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DividaListaComponent } from './divida-lista/divida-lista.component';
import { DividaListaTabelaComponent } from './divida-lista/divida-lista-tabela/divida-lista-tabela.component';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [
    DividaListaComponent,
    DividaListaTabelaComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class DividasModule { }
