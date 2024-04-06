import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearoComponent } from './hearo.component';

describe('HearoComponent', () => {
  let component: HearoComponent;
  let fixture: ComponentFixture<HearoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HearoComponent]
    });
    fixture = TestBed.createComponent(HearoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
