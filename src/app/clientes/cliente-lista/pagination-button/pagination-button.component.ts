import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ec-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.css']
})
export class PaginationButtonComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
