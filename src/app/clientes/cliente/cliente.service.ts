
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Cliente } from './cliente';

import { PaginaCliente } from './pagina-cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    

    private api = 'http://localhost:8080/api/clientes'

    constructor(private http: HttpClient) {
        this.http = http;
    }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getClientes() {
        return this.http
            .get<PaginaCliente>(`${this.api}`)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    deleteCliente(cliente: Cliente) {
        return this.http.delete<Cliente>(`${this.api}/${cliente.id}`, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    
    atualizaStatusCliente(cliente: Cliente) {
      return this.http.put<Cliente>(`${this.api}/status/${cliente.id}`, this.httpOptions)
      .pipe(
          retry(1),
          catchError(this.handleError)
      );
    }

    // Manipulação de erros
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
