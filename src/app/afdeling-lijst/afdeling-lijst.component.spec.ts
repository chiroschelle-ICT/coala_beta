import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfdelingLijstComponent } from './afdeling-lijst.component';

describe('AfdelingLijstComponent', () => {
  let component: AfdelingLijstComponent;
  let fixture: ComponentFixture<AfdelingLijstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfdelingLijstComponent]
    });
    fixture = TestBed.createComponent(AfdelingLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
