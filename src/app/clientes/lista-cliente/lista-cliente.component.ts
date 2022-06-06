import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  clientes: any[] = [];
  
  constructor(private clienteService: ClienteService){}
  
  ngOnInit(): void {
    this.clienteService
      .listarClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

}
