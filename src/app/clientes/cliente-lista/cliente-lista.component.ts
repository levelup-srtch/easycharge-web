import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'ec-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = [];
  hasMore: boolean = true;
  currentPage: number = 1;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  load() {
    this.clienteService
    .getPaginatedClientes(++this.currentPage)
    .subscribe((paginaCliente): void => {
      this.clientes.push(...paginaCliente.content);
      if(!paginaCliente.content.length){
        this.hasMore = false;
      }
    })
  }

}
