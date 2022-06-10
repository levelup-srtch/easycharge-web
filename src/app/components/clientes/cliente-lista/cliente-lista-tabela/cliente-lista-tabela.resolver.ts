import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PaginaCliente } from 'src/app/model/pagina-cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Injectable({
    providedIn: 'root'
})
export class ClienteListaTabelaResolver implements Resolve<Observable<PaginaCliente>>{

    page: number = 0;

    constructor(private service: ClienteService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginaCliente> | Observable<Observable<PaginaCliente>> | Promise<Observable<PaginaCliente>> {
        const page: number = route.params['page'];
        return this.service.getPaginatedClientes(page)
    }

}