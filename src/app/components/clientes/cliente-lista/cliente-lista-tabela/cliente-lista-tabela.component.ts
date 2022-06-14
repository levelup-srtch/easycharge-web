import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';



@Component({
  selector: 'ec-cliente-lista-tabela',
  templateUrl: './cliente-lista-tabela.component.html',
  styleUrls: ['./cliente-lista-tabela.component.css']
})
export class ClienteListaTabelaComponent implements OnInit {

  clientes: Cliente[] = []
  
  hasMore: boolean = true;
  currentPage: number = 0;

  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle('Cliente | Lista')
   }

  ngOnInit(): void {
    this.clientes = this.activatedRoute.snapshot.data['clientes']['content'];
  }

  getPaginatedClientes() {
    this.clienteService
      .getPaginatedClientes(this.currentPage)
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
