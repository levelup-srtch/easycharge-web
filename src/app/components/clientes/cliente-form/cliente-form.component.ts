import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ec-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Cliente | Formulário')
   }

  ngOnInit(): void {
  }

}
