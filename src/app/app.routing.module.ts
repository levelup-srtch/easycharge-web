import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';


const routes: Routes = [
    { path: 'clientes/lista', component: ClienteListaComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}