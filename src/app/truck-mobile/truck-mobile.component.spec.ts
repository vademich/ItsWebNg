import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckMobileComponent } from './truck-mobile.component';

describe('TruckMobileComponent', () => {
  let component: TruckMobileComponent;
  let fixture: ComponentFixture<TruckMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruckMobileComponent]
    });
    fixture = TestBed.createComponent(TruckMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
