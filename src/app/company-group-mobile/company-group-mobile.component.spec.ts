import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGroupMobileComponent } from './company-group-mobile.component';

describe('CompanyGroupMobileComponent', () => {
  let component: CompanyGroupMobileComponent;
  let fixture: ComponentFixture<CompanyGroupMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyGroupMobileComponent]
    });
    fixture = TestBed.createComponent(CompanyGroupMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
