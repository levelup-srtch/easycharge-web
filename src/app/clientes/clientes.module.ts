import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
    declarations: [
        ClienteComponent,
        ClienteListaComponent,
        ClienteFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class ClientesModule {

}