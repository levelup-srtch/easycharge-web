import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaComponent } from './divida.component';

describe('DividaComponent', () => {
  let component: DividaComponent;
  let fixture: ComponentFixture<DividaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
