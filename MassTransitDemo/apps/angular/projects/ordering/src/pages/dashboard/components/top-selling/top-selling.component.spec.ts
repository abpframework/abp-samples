import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingComponent } from './top-selling.component';

describe('TopSellingComponent', () => {
  let component: TopSellingComponent;
  let fixture: ComponentFixture<TopSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
