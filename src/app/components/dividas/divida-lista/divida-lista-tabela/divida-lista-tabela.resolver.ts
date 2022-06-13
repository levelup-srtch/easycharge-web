import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PaginaDivida } from 'src/app/model/pagina-divida';
import { DividaService } from 'src/app/service/divida.service';

@Injectable({
    providedIn: 'root'
})
export class DividaListaTabelaResolver implements Resolve<Observable<PaginaDivida>> {

    page: number = 0;

    constructor(private service: DividaService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaginaDivida> | Observable<Observable<PaginaDivida>> | Promise<Observable<PaginaDivida>> {
        const page: number = route.params['page'];
        return this.service.getDividasPaginada(page);
    }

}