import { Component, OnInit } from '@angular/core';
import { Divida } from 'src/app/model/divida';
import { DividaService } from 'src/app/service/divida.service';



@Component({
  selector: 'ec-divida-lista-tabela',
  templateUrl: './divida-lista-tabela.component.html',
  styleUrls: ['./divida-lista-tabela.component.css']
})
export class DividaListaTabelaComponent implements OnInit {

  dividas: Divida[] = [];
  
  hasMore: boolean = true;
  currentPage: number = 0;

  constructor(private dividaService: DividaService) { }

  ngOnInit(): void {
    this.getDividasPaginada();
  }

  getDividasPaginada() {
    this.dividaService
      .getDividasPaginada(this.currentPage)
      .subscribe(paginaDivida => this.dividas = paginaDivida.content);
  }

  deleteDivida(divida: Divida): void {
    this.dividaService.deleteDivida(divida).subscribe(() => {
      this.getDividasPaginada();
    });
  }

  load() {
    this.dividaService
    .getDividasPaginada(++this.currentPage)
    .subscribe((paginaDivida): void => {
      this.dividas.push(...paginaDivida.content);
      if(!paginaDivida.content.length){
        this.hasMore = false;
      }
    })
  }

}
