import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfigurasComponent } from './lfiguras.component';

describe('LfigurasComponent', () => {
  let component: LfigurasComponent;
  let fixture: ComponentFixture<LfigurasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LfigurasComponent]
    });
    fixture = TestBed.createComponent(LfigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
