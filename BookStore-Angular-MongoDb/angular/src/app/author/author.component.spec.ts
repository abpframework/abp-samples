import { clearPage, CoreTestingModule, wait } from '@abp/ng.core/testing';
import { ThemeBasicTestingModule } from '@abp/ng.theme.basic/testing';
import { ThemeSharedTestingModule } from '@abp/ng.theme.shared/testing';
import { ComponentFixture } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AuthorDto,
  AuthorService,
  CreateAuthorDto,
  GetAuthorListDto,
  UpdateAuthorDto,
} from '@proxy/authors';
import {
  fireEvent,
  getByLabelText,
  getByRole,
  getByText,
  queryByText,
  render,
  screen,
} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { BehaviorSubject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthorComponent } from './author.component';

const items$ = new BehaviorSubject<AuthorDto[]>([]);

const list$ = items$.pipe(
  map(items => ({
    items,
    totalCount: items.length,
  })),
  take(1)
);

const createAuthorSpy = jasmine.createSpy().and.callFake((input: CreateAuthorDto) => {
  const items = items$.value;
  const newAuthor = { id: 'ia', ...input };
  items.push(newAuthor);
  items$.next(items);
  return of(null);
});

const updateAuthorSpy = jasmine.createSpy().and.callFake((id: string, input: UpdateAuthorDto) => {
  const items = items$.value;
  const index = items.findIndex(item => item.id === id);
  const updatedAuthor = { ...items[index], ...input };
  items$.next([...items.splice(0, index), updatedAuthor, ...items.splice(index + 1)]);
  return of(null);
});

const deleteAuthorSpy = jasmine.createSpy().and.callFake((id: string) => {
  const items = items$.value;
  const index = items.findIndex(item => item.id === id);
  items$.next([...items.splice(0, index), ...items.splice(index + 1)]);
  return of(null);
});

const getAuthor = (id: string) =>
  items$.pipe(
    map(items => items.find(item => item.id === id)),
    take(1)
  );

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async () => {
    items$.next([{ id: 'fh', name: 'Frank Herbert', birthDate: '1920-10-08' }]);

    const result = await render(AuthorComponent, {
      declarations: [],
      imports: [
        CoreTestingModule.withConfig(),
        ThemeSharedTestingModule.withConfig(),
        ThemeBasicTestingModule.withConfig(),
        NgbModule,
      ],
      providers: [
        {
          provide: AuthorService,
          useValue: {
            create: createAuthorSpy,
            update: updateAuthorSpy,
            delete: deleteAuthorSpy,
            get: getAuthor,
            getList: (query: GetAuthorListDto) => list$,
          },
        },
      ],
    });
    fixture = result.fixture;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    clearPage(fixture);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading', () => {
    const heading = screen.getByRole('heading', { name: /menu:authors/i });
    expect(heading).toBeTruthy();
  });

  it('should render list in table', async () => {
    const table = await screen.findByTestId('author-table');

    const name = getByText(table, /Frank Herbert/);
    expect(name).toBeTruthy();

    const birthDate = getByText(table, /Oct 8, 1920/);
    expect(birthDate).toBeTruthy();
  });

  it('should display create modal', async () => {
    const newBtn = screen.getByRole('button', { name: /new/i });
    userEvent.click(newBtn);

    await wait(fixture);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeTruthy();

    const heading = getByRole(modal, 'heading', { name: /new/i });
    expect(heading).toBeTruthy();

    const nameInput = getByLabelText(modal, /name/i);
    expect(nameInput).toBeTruthy();
    const birthInput = getByLabelText(modal, /birth/i);
    expect(birthInput).toBeTruthy();

    const cancelBtn = getByRole(modal, 'button', { name: /cancel/i });
    expect(cancelBtn).toBeTruthy();
    const saveBtn = getByRole(modal, 'button', { name: /save/i }) as HTMLButtonElement;
    expect(saveBtn).toBeTruthy();
    expect(saveBtn.disabled).toBeTruthy();
  });

  it('should submit create form', async () => {
    const newBtn = screen.getByRole('button', { name: /new/i });
    userEvent.click(newBtn);

    await wait(fixture);

    const modal = screen.getByRole('dialog');
    const nameInput = getByLabelText(modal, /name/i);
    const birthInput = getByLabelText(modal, /birth/i);
    const saveBtn = getByRole(modal, 'button', { name: /save/i }) as HTMLButtonElement;

    userEvent.type(nameInput, 'Isaac{space}Asimov');
    fireEvent.change(birthInput, { target: { value: '1920-01-02' } });

    expect(saveBtn.disabled).toBeFalsy();

    userEvent.click(saveBtn);

    await wait(fixture);

    expect(createAuthorSpy).toHaveBeenCalledWith({
      name: 'Isaac Asimov',
      birthDate: '1920-01-02',
    });

    expect(screen.queryByRole('dialog')).toBeFalsy();

    expect(fixture.componentInstance.form.value).toEqual({
      name: null,
      birthDate: null,
    });

    const table = screen.getByTestId('author-table');
    expect(getByText(table, /Frank Herbert/)).toBeTruthy();
    expect(getByText(table, /Isaac Asimov/)).toBeTruthy();
  });

  it('should display update modal', async () => {
    const actionsBtn = screen.queryByRole('button', { name: /actions/i });
    userEvent.click(actionsBtn);

    const editBtn = screen.getByRole('button', { name: /edit/i });
    userEvent.click(editBtn);

    await wait(fixture);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeTruthy();

    const heading = getByRole(modal, 'heading', { name: /edit/i });
    expect(heading).toBeTruthy();

    const nameInput = getByLabelText(modal, /name/i) as HTMLInputElement;
    expect(nameInput.value).toBe('Frank Herbert');
    const birthInput = getByLabelText(modal, /birth/i) as HTMLInputElement;
    expect(birthInput.value).toBe('Oct 8, 1920');

    const cancelBtn = getByRole(modal, 'button', { name: /cancel/i });
    expect(cancelBtn).toBeTruthy();
    const saveBtn = getByRole(modal, 'button', { name: /save/i }) as HTMLButtonElement;
    expect(saveBtn).toBeTruthy();
    expect(saveBtn.disabled).toBeTruthy();
  });

  it('should submit update form', async () => {
    const actionsBtn = screen.queryByRole('button', { name: /actions/i });
    userEvent.click(actionsBtn);

    const editBtn = screen.getByRole('button', { name: /edit/i });
    userEvent.click(editBtn);

    await wait(fixture);

    const modal = screen.getByRole('dialog');
    const nameInput = getByLabelText(modal, /name/i);
    const birthInput = getByLabelText(modal, /birth/i);
    const saveBtn = getByRole(modal, 'button', { name: /save/i }) as HTMLButtonElement;

    userEvent.type(nameInput, '{selectall}Isaac{space}Asimov');
    fireEvent.change(birthInput, { target: { value: '1920-01-02' } });

    expect(saveBtn.disabled).toBeFalsy();

    userEvent.click(saveBtn);

    await wait(fixture);

    expect(updateAuthorSpy).toHaveBeenCalledWith('fh', {
      name: 'Isaac Asimov',
      birthDate: '1920-01-02',
    });

    expect(screen.queryByRole('dialog')).toBeFalsy();

    expect(fixture.componentInstance.form.value).toEqual({
      name: null,
      birthDate: null,
    });

    const table = await screen.findByTestId('author-table');
    expect(queryByText(table, /Frank Herbert/)).toBeFalsy();
    expect(getByText(table, /Isaac Asimov/)).toBeTruthy();
  });

  it('should delete item from list', async () => {
    const actionsBtn = screen.queryByRole('button', { name: /actions/i });
    userEvent.click(actionsBtn);

    const deleteBtn = screen.getByRole('button', { name: /delete/i });
    userEvent.click(deleteBtn);

    await wait(fixture);

    const confirmText = screen.getByText('AreYouSure');
    expect(confirmText).toBeTruthy();

    const confirmBtn = screen.getByRole('button', { name: 'Yes' });
    userEvent.click(confirmBtn);

    await wait(fixture);

    expect(deleteAuthorSpy).toHaveBeenCalledWith('fh');

    expect(screen.queryByText('AreYouSure')).toBeFalsy();

    const table = await screen.findByTestId('author-table');
    expect(queryByText(table, /Frank Herbert/)).toBeFalsy();
  });
});
