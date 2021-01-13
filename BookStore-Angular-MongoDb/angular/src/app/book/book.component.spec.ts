import { CoreTestingModule } from '@abp/ng.core/testing';
import { ThemeBasicTestingModule } from '@abp/ng.theme.basic/testing';
import { ThemeSharedTestingModule } from '@abp/ng.theme.shared/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { BookService } from '@proxy/books';
import { BehaviorSubject } from 'rxjs';
import { BookComponent } from './Book.component';

const list$ = new BehaviorSubject({ items: [], totalCount: 0 });
const authorLookup$ = new BehaviorSubject({ items: [], totalCount: 0 });

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreTestingModule.withConfig(),
          ThemeSharedTestingModule.withConfig(),
          ThemeBasicTestingModule.withConfig(),
          NgbDropdownModule,
          NgxValidateCoreModule,
          NgbDatepickerModule,
        ],
        declarations: [BookComponent],
        providers: [
          {
            provide: BookService,
            useValue: {
              getList: () => list$,
              getAuthorLookup: () => authorLookup$,
            },
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
