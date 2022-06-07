import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: Cliente[] = [{
    id: '',
    nome: '',
    cpf: '',
    telefone: '',
    local: '',
    renda: '',
    status: ''
  }];
  
  constructor(private clienteService: ClienteService){}
  
  ngOnInit(): void {
    this.clienteService
      .listarClientes()
      .subscribe(paginaCliente => this.clientes = paginaCliente.content);
  }

}
