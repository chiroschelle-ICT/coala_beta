import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedenDetailsComponent } from './leden-details.component';

describe('LedenDetailsComponent', () => {
  let component: LedenDetailsComponent;
  let fixture: ComponentFixture<LedenDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LedenDetailsComponent]
    });
    fixture = TestBed.createComponent(LedenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
