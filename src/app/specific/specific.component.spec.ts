import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificComponent } from './specific.component';

describe('SpecificComponent', () => {
  let component: SpecificComponent;
  let fixture: ComponentFixture<SpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificComponent]
    });
    fixture = TestBed.createComponent(SpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
