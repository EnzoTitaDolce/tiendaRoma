import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetratosComponent } from './retratos.component';

describe('RetratosComponent', () => {
  let component: RetratosComponent;
  let fixture: ComponentFixture<RetratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
