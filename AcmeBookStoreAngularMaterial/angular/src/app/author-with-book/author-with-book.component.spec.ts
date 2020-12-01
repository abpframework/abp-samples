import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWithBookComponent } from './author-with-book.component';

describe('AuthorWithBookComponent', () => {
  let component: AuthorWithBookComponent;
  let fixture: ComponentFixture<AuthorWithBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWithBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWithBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
