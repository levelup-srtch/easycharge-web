import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Divida } from '../model/divida';

@Injectable({
  providedIn: 'root'
})
export class DividaService {

  private api = 'http://localhost:8080/api/dividas'

  constructor(private http: HttpClient) {
    this.http = http;
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDividas() {
    return this.http
        .get<Divida[]>(`${this.api}/cpf`);
}

}
