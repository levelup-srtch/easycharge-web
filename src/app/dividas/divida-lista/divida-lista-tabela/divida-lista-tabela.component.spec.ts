import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaListaTabelaComponent } from './divida-lista-tabela.component';

describe('DividaListaTabelaComponent', () => {
  let component: DividaListaTabelaComponent;
  let fixture: ComponentFixture<DividaListaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaListaTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaListaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
