import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormClienteComponent } from './clientes/form-cliente/form-cliente.component';
import { ListaClienteComponent } from './clientes/lista-cliente/lista-cliente.component';

const routes: Routes = [
    { path: 'clientes/lista', component: ListaClienteComponent },
    { path: 'clientes/formulario', component: FormClienteComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}