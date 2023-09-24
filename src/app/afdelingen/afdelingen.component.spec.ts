import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfdelingenComponent } from './afdelingen.component';

describe('AfdelingenComponent', () => {
  let component: AfdelingenComponent;
  let fixture: ComponentFixture<AfdelingenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfdelingenComponent]
    });
    fixture = TestBed.createComponent(AfdelingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
