import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../cliente/cliente';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'ec-cliente-lista-tabela',
  templateUrl: './cliente-lista-tabela.component.html',
  styleUrls: ['./cliente-lista-tabela.component.css']
})
export class ClienteListaTabelaComponent implements OnInit {

  @Input() clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getPaginatedClientes();
  }

  getPaginatedClientes() {
    this.clienteService
      .getClientes()
      .subscribe(paginaCliente => this.clientes = paginaCliente.content);
  }

  deleteCliente(cliente: Cliente): void {
    this.clienteService.deleteCliente(cliente).subscribe(() => {
      this.getPaginatedClientes();
    });
  }

  atualizaStatusCliente(cliente: Cliente): void {
    this.clienteService.atualizaStatusCliente(cliente).subscribe(() => {
      this.getPaginatedClientes();
    });
  }

}
