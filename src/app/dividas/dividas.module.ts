import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DividaListaComponent } from './divida-lista/divida-lista.component';


@NgModule({
  declarations: [
    DividaListaComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class DividasModule { }
