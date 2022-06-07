import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

@NgModule({
    declarations:[ ClienteComponent, ClienteListaComponent ],
    exports: [ ClienteComponent ],
    imports: [ HttpClientModule, CommonModule]
})
export class ClientesModule {
    
}