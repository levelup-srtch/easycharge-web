import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaClienteComponent } from './clientes/lista-cliente/lista-cliente.component';

const routes: Routes = [
    { path: 'clientes/lista', component: ListaClienteComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}