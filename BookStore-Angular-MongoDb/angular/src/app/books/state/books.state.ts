import { PagedResultDto } from '@abp/ng.core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetBooks, CreateUpdateBook, DeleteBook } from './books.actions'; // <== added DeleteBook==>
import { BookService } from '../../app/shared/services';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BookDto } from '../../app/shared/models';

export class BooksStateModel {
  public book: PagedResultDto<BookDto>;
}

@State<BooksStateModel>({
  name: 'BooksState',
  defaults: { book: {} } as BooksStateModel,
})
@Injectable()
export class BooksState {
  @Selector()
  static getBooks(state: BooksStateModel) {
    return state.book.items || [];
  }

  constructor(private bookService: BookService) {}

  @Action(GetBooks)
  get(ctx: StateContext<BooksStateModel>) {
    return this.bookService.getListByInput().pipe(
      tap((booksResponse) => {
        ctx.patchState({
          book: booksResponse,
        });
      })
    );
  }

  @Action(CreateUpdateBook)
  save(ctx: StateContext<BooksStateModel>, action: CreateUpdateBook) {
    if (action.id) {
      return this.bookService.updateByIdAndInput(action.payload, action.id);
    } else {
      return this.bookService.createByInput(action.payload);
    }
  }

  @Action(DeleteBook)
  delete(ctx: StateContext<BooksStateModel>, action: DeleteBook) {
    return this.bookService.deleteById(action.id);
  }
}
