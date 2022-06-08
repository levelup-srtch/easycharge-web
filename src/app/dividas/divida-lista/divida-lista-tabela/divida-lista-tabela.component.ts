import { Component, Input, OnInit } from '@angular/core';
import { Divida } from '../../divida/divida';
import { DividaService } from '../../divida/divida.service';

@Component({
  selector: 'ec-divida-lista-tabela',
  templateUrl: './divida-lista-tabela.component.html',
  styleUrls: ['./divida-lista-tabela.component.css']
})
export class DividaListaTabelaComponent implements OnInit {

  @Input() dividas: Divida[] = [];

  constructor(private dividaService: DividaService) { }

  ngOnInit(): void {
    this.getDividas();
  }

  getDividas() {
    this.dividaService
      .getDividas()
      .subscribe(dividas => this.dividas = dividas);
  }

}
