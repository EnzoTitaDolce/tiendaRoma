import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImanesComponent } from './imanes.component';

describe('ImanesComponent', () => {
  let component: ImanesComponent;
  let fixture: ComponentFixture<ImanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
