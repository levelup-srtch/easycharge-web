
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from "./cliente";

const API = 'http://localhost:8080'

@Injectable({ providedIn: 'root' })
export class ClienteService {

    constructor(private http: HttpClient){
        this.http = http;
    }
    listarClientes(){
        return this.http
            .get<Cliente[]>(API + '/api/clientes');
    }
}