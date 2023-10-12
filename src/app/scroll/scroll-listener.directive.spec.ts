import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ScrollListenerDirective } from './scroll-listener.directive';

@Component({
  template: `
    <div appScrollListener></div>
  `
})
class TestComponent {}

describe('ScrollListenerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollListenerDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });
  
});