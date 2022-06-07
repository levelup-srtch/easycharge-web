import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
    declarations:[ ClienteComponent, ListaClienteComponent ],
    exports: [ ClienteComponent ],
    imports: [ HttpClientModule, CommonModule]
})
export class ClientesModule {
    
}