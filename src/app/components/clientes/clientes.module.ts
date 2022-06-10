import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaTabelaComponent } from './cliente-lista/cliente-lista-tabela/cliente-lista-tabela.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { PaginationButtonComponent } from './cliente-lista/pagination-button/pagination-button.component';



@NgModule({
    declarations: [
        ClienteListaComponent,
        ClienteFormComponent,
        ClienteListaTabelaComponent,
        PaginationButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClientesModule {  }