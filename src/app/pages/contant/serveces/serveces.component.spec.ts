import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServecesComponent } from './serveces.component';

describe('ServecesComponent', () => {
  let component: ServecesComponent;
  let fixture: ComponentFixture<ServecesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServecesComponent]
    });
    fixture = TestBed.createComponent(ServecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
