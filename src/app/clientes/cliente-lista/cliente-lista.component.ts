import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'ec-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

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
