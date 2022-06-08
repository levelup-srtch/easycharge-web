import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
    declarations: [
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