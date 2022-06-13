import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, retry } from 'rxjs';

import { Divida } from '../model/divida';
import { PaginaDivida } from '../model/pagina-divida';

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
  
  getDividasPaginada(page: number) {
    const params = new HttpParams()
            .append('page', page)
        return this.http
            .get<PaginaDivida>(`${this.api}/cpf`, { params })
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
  }

  deleteDivida(divida: Divida) {
    return this.http.delete<Divida>(`${this.api}/${divida.id}`, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
    } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(() => new Error(errorMessage));
};
}
