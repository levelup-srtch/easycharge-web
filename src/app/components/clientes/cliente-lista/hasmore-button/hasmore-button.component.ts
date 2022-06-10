import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ec-pagination-button',
  templateUrl: './hasmore-button.component.html',
  styleUrls: ['./hasmore-button.component.css']
})
export class HasMoreButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
