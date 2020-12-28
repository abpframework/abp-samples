import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWithBooksComponent } from './author-with-books.component';

describe('AuthorWithBookComponent', () => {
  let component: AuthorWithBooksComponent;
  let fixture: ComponentFixture<AuthorWithBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWithBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorWithBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
