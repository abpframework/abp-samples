import { CreateUpdateBookDto } from '../models';

export class GetBooks {
  static readonly type = '[Book] Get';
}

export class CreateUpdateBook {
  static readonly type = '[Book] Create Update Book';
  constructor(public payload: CreateUpdateBookDto, public id?: string) {} // <== added id parameter ==>
}

export class DeleteBook {
  static readonly type = '[Book] Delete';
  constructor(public id: string) {}
}
