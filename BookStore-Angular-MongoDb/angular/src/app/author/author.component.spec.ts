import { CoreTestingModule } from '@abp/ng.core/testing';
import { ThemeBasicTestingModule } from '@abp/ng.theme.basic/testing';
import { ThemeSharedTestingModule } from '@abp/ng.theme.shared/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AuthorService } from '@proxy/authors';
import { BehaviorSubject } from 'rxjs';
import { AuthorComponent } from './author.component';

const list$ = new BehaviorSubject({ items: [], totalCount: 0 });

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

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
        declarations: [AuthorComponent],
        providers: [
          {
            provide: AuthorService,
            useValue: {
              getList: () => list$,
            },
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
