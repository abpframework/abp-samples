import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { clearPage, CoreTestingModule, wait } from '@abp/ng.core/testing';
import { ThemeBasicTestingModule } from '@abp/ng.theme.basic/testing';
import { ThemeSharedTestingModule } from '@abp/ng.theme.shared/testing';
import { ComponentFixture } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorDto } from '@proxy/authors';
import { BookDto, BookService, BookType, CreateUpdateBookDto } from '@proxy/books';
import {
  fireEvent,
  getAllByText,
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
import { BookComponent } from './book.component';

const items$ = new BehaviorSubject<BookDto[]>([]);

const authors$ = new BehaviorSubject<AuthorDto[]>([
  { id: 'fh', name: 'Frank Herbert', birthDate: '1920-10-08' },
  { id: 'ia', name: 'Isaac Asimov', birthDate: '1920-01-02' },
]);

const authorLookup$ = authors$.pipe(
  map(items => ({
    items,
    totalCount: items.length,
  })),
  take(1)
);

const list$ = items$.pipe(
  map(items => ({
    items,
    totalCount: items.length,
  })),
  take(1)
);

const createBookSpy = jasmine.createSpy().and.callFake((input: CreateUpdateBookDto) => {
  const author = authors$.value.find(({ id }) => id === input.authorId);
  const items = items$.value;
  const newBook = { id: 'i', authorName: author.name, ...input };
  items.push(newBook);
  items$.next(items);
  return of(null);
});

const updateBookSpy = jasmine.createSpy().and.callFake((id: string, input: CreateUpdateBookDto) => {
  const author = authors$.value.find(({ id }) => id === input.authorId);
  const items = items$.value;
  const index = items.findIndex(item => item.id === id);
  const updatedBook = { ...items[index], ...input, authorName: author.name };
  items$.next([...items.splice(0, index), updatedBook, ...items.splice(index + 1)]);
  return of(null);
});

const deleteBookSpy = jasmine.createSpy().and.callFake((id: string) => {
  const items = items$.value;
  const index = items.findIndex(item => item.id === id);
  items$.next([...items.splice(0, index), ...items.splice(index + 1)]);
  return of(null);
});

const getBook = (id: string) =>
  items$.pipe(
    map(items => items.find(item => item.id === id)),
    take(1)
  );

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    items$.next([
      {
        id: 'd',
        authorId: 'fh',
        authorName: 'Frank Herbert',
        name: 'Dune',
        type: BookType.ScienceFiction,
        publishDate: '1965-08-01',
        price: 9.49,
      },
    ]);

    const result = await render(BookComponent, {
      declarations: [],
      imports: [
        CoreTestingModule.withConfig(),
        ThemeSharedTestingModule.withConfig(),
        ThemeBasicTestingModule.withConfig(),
        NgbModule,
      ],
      providers: [
        {
          provide: BookService,
          useValue: {
            create: createBookSpy,
            update: updateBookSpy,
            delete: deleteBookSpy,
            get: getBook,
            getAuthorLookup: () => authorLookup$,
            getList: (query: PagedAndSortedResultRequestDto) => list$,
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
    const heading = screen.getByRole('heading', { name: /menu:books/i });
    expect(heading).toBeTruthy();
  });

  it('should render list in table', async () => {
    const table = await screen.findByTestId('book-table');

    const name = getByText(table, /Dune/);
    expect(name).toBeTruthy();
    const authorName = getByText(table, /Frank Herbert/);
    expect(authorName).toBeTruthy();
    const type = getByText(table, /Enum:BookType:7/);
    expect(type).toBeTruthy();
    const publishDate = getByText(table, /Aug 1, 1965/);
    expect(publishDate).toBeTruthy();
    const price = getByText(table, /\$9.49/);
    expect(price).toBeTruthy();
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
    const authorInput = getByLabelText(modal, /author/i);
    expect(authorInput).toBeTruthy();
    const typeInput = getByLabelText(modal, /type/i);
    expect(typeInput).toBeTruthy();
    const publishInput = getByLabelText(modal, /publish/i);
    expect(publishInput).toBeTruthy();
    const priceInput = getByLabelText(modal, /price/i);
    expect(priceInput).toBeTruthy();

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
    const authorInput = getByLabelText(modal, /author/i);
    const authorOption = getByText(authorInput, /Isaac Asimov/);
    const typeInput = getByLabelText(modal, /type/i);
    const typeOption = getByText(typeInput, /ScienceFiction/);
    const publishInput = getByLabelText(modal, /publish/i);
    const priceInput = getByLabelText(modal, /price/i);
    const saveBtn = getByRole(modal, 'button', { name: /save/i }) as HTMLButtonElement;

    userEvent.type(nameInput, 'I,{space}Robot');
    userEvent.selectOptions(authorInput, authorOption);
    userEvent.selectOptions(typeInput, typeOption);
    fireEvent.change(publishInput, { target: { value: '1950-12-02' } });
    userEvent.type(priceInput, '10.14');

    expect(saveBtn.disabled).toBeFalsy();

    userEvent.click(saveBtn);

    await wait(fixture);

    expect(createBookSpy).toHaveBeenCalledWith({
      authorId: 'ia',
      name: 'I, Robot',
      type: BookType.ScienceFiction,
      publishDate: '1950-12-02',
      price: 10.14,
    });

    expect(screen.queryByRole('dialog')).toBeFalsy();

    expect(fixture.componentInstance.form.value).toEqual({
      authorId: null,
      name: null,
      type: null,
      publishDate: null,
      price: null,
    });

    const table = screen.getByTestId('book-table');
    expect(getByText(table, /Dune/)).toBeTruthy();
    expect(getByText(table, /Frank Herbert/)).toBeTruthy();
    expect(getByText(table, /Aug 1, 1965/)).toBeTruthy();
    expect(getByText(table, /9.49/)).toBeTruthy();
    expect(getByText(table, /I, Robot/)).toBeTruthy();
    expect(getByText(table, /Isaac Asimov/)).toBeTruthy();
    expect(getByText(table, /Dec 2, 1950/)).toBeTruthy();
    expect(getByText(table, /10.14/)).toBeTruthy();
    expect(getAllByText(table, /Enum:BookType:7/).length).toBe(2);
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
    expect(nameInput.value).toBe('Dune');
    const authorInput = getByLabelText(modal, /author/i) as HTMLSelectElement;
    expect(authorInput.value).toContain(': fh');
    const typeInput = getByLabelText(modal, /type/i) as HTMLSelectElement;
    expect(typeInput.value).toContain(': 7');
    const publishInput = getByLabelText(modal, /publish/i) as HTMLInputElement;
    expect(publishInput.value).toBe('Aug 1, 1965');
    const priceInput = getByLabelText(modal, /price/i) as HTMLInputElement;
    expect(priceInput.value).toBe('9.49');

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
    const authorInput = getByLabelText(modal, /author/i);
    const authorOption = getByText(authorInput, /Isaac Asimov/);
    const typeInput = getByLabelText(modal, /type/i);
    const typeOption = getByText(typeInput, /ScienceFiction/);
    const publishInput = getByLabelText(modal, /publish/i);
    const priceInput = getByLabelText(modal, /price/i);
    const saveBtn = getByRole(modal, 'button', { name: /save/i }) as HTMLButtonElement;

    userEvent.type(nameInput, '{selectall}I,{space}Robot');
    userEvent.selectOptions(authorInput, authorOption);
    userEvent.selectOptions(typeInput, typeOption);
    fireEvent.change(publishInput, { target: { value: '1950-12-02' } });
    userEvent.type(priceInput, '{backspace}{backspace}{backspace}{backspace}10.14');

    expect(saveBtn.disabled).toBeFalsy();

    userEvent.click(saveBtn);

    await wait(fixture);

    expect(updateBookSpy).toHaveBeenCalledWith('d', {
      authorId: 'ia',
      name: 'I, Robot',
      type: BookType.ScienceFiction,
      publishDate: '1950-12-02',
      price: 10.14,
    });

    expect(screen.queryByRole('dialog')).toBeFalsy();

    expect(fixture.componentInstance.form.value).toEqual({
      authorId: null,
      name: null,
      type: null,
      publishDate: null,
      price: null,
    });

    const table = screen.getByTestId('book-table');
    expect(queryByText(table, /Dune/)).toBeFalsy();
    expect(queryByText(table, /Frank Herbert/)).toBeFalsy();
    expect(queryByText(table, /Aug 1, 1965/)).toBeFalsy();
    expect(queryByText(table, /9.49/)).toBeFalsy();
    expect(getByText(table, /I, Robot/)).toBeTruthy();
    expect(getByText(table, /Isaac Asimov/)).toBeTruthy();
    expect(getByText(table, /Dec 2, 1950/)).toBeTruthy();
    expect(getByText(table, /10.14/)).toBeTruthy();
    expect(getAllByText(table, /Enum:BookType:7/).length).toBe(1);
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

    expect(deleteBookSpy).toHaveBeenCalledWith('d');

    expect(screen.queryByText('AreYouSure')).toBeFalsy();

    const table = await screen.findByTestId('book-table');
    expect(queryByText(table, /Dune/)).toBeFalsy();
    expect(queryByText(table, /Frank Herbert/)).toBeFalsy();
    expect(queryByText(table, /Aug 1, 1965/)).toBeFalsy();
    expect(queryByText(table, /9.49/)).toBeFalsy();
    expect(queryByText(table, /Enum:BookType:7/)).toBeFalsy();
  });
});
