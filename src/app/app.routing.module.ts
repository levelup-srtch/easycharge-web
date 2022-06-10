import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { ClienteListaTabelaResolver } from './components/clientes/cliente-lista/cliente-lista-tabela/cliente-lista-tabela.resolver';
import { ClienteListaComponent } from './components/clientes/cliente-lista/cliente-lista.component';
import { DividaListaComponent } from './components/dividas/divida-lista/divida-lista.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';


const routes: Routes = [
    { 
        path: 'clientes/lista', component: ClienteListaComponent,
        resolve: {
            clientes:ClienteListaTabelaResolver
        }
    }, 
    { 
        path: 'clientes/formulario', component: ClienteFormComponent 
    },
    { 
        path: 'dividas/lista', component: DividaListaComponent 
    },
    { 
        path: '**', component: NotFoundComponent 
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {  }