import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfasVentaGokuComponent } from './interfas-venta-goku.component';

describe('InterfasVentaGokuComponent', () => {
  let component: InterfasVentaGokuComponent;
  let fixture: ComponentFixture<InterfasVentaGokuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfasVentaGokuComponent]
    });
    fixture = TestBed.createComponent(InterfasVentaGokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
