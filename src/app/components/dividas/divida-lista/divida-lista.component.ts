import { Component, OnInit } from '@angular/core';
import { Divida } from 'src/app/model/divida';



@Component({
  selector: 'ec-divida-lista',
  templateUrl: './divida-lista.component.html',
  styleUrls: ['./divida-lista.component.css']
})
export class DividaListaComponent implements OnInit {

  dividas: Divida[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
