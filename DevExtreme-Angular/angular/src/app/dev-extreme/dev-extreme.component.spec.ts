import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevExtremeComponent } from './dev-extreme.component';

describe('DevExtremeComponent', () => {
  let component: DevExtremeComponent;
  let fixture: ComponentFixture<DevExtremeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevExtremeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevExtremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
