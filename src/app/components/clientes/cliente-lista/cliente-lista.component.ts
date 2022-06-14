import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ec-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  path: string = ''

  constructor(activatedRoute: ActivatedRoute) {
    this.path = activatedRoute.snapshot.url[0].path
  }

  ngOnInit(): void {
  }



}
