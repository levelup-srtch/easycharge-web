import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { DividaListaComponent } from './dividas/divida-lista/divida-lista.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
    { path: 'clientes/lista', component: ClienteListaComponent },
    { path: 'clientes/formulario', component: ClienteFormComponent },
    { path: 'dividas/lista', component: DividaListaComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {  }