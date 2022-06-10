import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaTabelaComponent } from './cliente-lista/cliente-lista-tabela/cliente-lista-tabela.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { HasMoreButtonComponent } from './cliente-lista/hasmore-button/hasmore-button.component';



@NgModule({
    declarations: [
        ClienteListaComponent,
        ClienteFormComponent,
        ClienteListaTabelaComponent,
        HasMoreButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClientesModule {  }