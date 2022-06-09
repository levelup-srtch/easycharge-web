import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaTabelaComponent } from './cliente-lista-tabela.component';

describe('ClienteListaTabelaComponent', () => {
  let component: ClienteListaTabelaComponent;
  let fixture: ComponentFixture<ClienteListaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteListaTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
