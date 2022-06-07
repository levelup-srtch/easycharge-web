
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PaginaCliente } from './pagina-cliente';

const API = 'http://localhost:8080'

@Injectable({ providedIn: 'root' })
export class ClienteService {

    constructor(private http: HttpClient){
        this.http = http;
    }
    listarClientes(){
        return this.http
            .get<PaginaCliente>(API + '/api/clientes');
    }
}