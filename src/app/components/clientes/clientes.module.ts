import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaTabelaComponent } from './cliente-lista/cliente-lista-tabela/cliente-lista-tabela.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
    declarations: [
        ClienteListaComponent,
        ClienteFormComponent,
        ClienteListaTabelaComponent
    ],
    imports: [
        CommonModule,
        TemplatesModule
    ]
})
export class ClientesModule {  }