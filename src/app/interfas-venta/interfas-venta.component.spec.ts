import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfasVentaComponent } from './interfas-venta.component';

describe('InterfasVentaComponent', () => {
  let component: InterfasVentaComponent;
  let fixture: ComponentFixture<InterfasVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfasVentaComponent]
    });
    fixture = TestBed.createComponent(InterfasVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
