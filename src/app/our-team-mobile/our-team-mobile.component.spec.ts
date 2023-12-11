import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamMobileComponent } from './our-team-mobile.component';

describe('OurTeamMobileComponent', () => {
  let component: OurTeamMobileComponent;
  let fixture: ComponentFixture<OurTeamMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTeamMobileComponent]
    });
    fixture = TestBed.createComponent(OurTeamMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
