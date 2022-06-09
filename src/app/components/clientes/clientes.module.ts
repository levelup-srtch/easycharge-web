import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaTabelaComponent } from './cliente-lista/cliente-lista-tabela/cliente-lista-tabela.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { PaginationButtonComponent } from './cliente-lista/pagination-button/pagination-button.component';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
    declarations: [
        ClienteListaComponent,
        ClienteFormComponent,
        ClienteComponent,
        ClienteListaTabelaComponent,
        PaginationButtonComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class ClientesModule {  }