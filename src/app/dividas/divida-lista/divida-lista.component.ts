import { Component, OnInit } from '@angular/core';

import { Divida } from '../divida/divida';
import { DividaService } from '../divida/divida.service';

@Component({
  selector: 'ec-divida-lista',
  templateUrl: './divida-lista.component.html',
  styleUrls: ['./divida-lista.component.css']
})
export class DividaListaComponent implements OnInit {

  dividas: Divida[] = [];

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
