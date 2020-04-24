import { CreateUpdateBookDto } from '../../app/shared/models';

export class GetBooks {
  static readonly type = '[Books] Get';
}

export class CreateUpdateBook {
  static readonly type = '[Books] Create Update Book';
  constructor(public payload: CreateUpdateBookDto, public id?: string) {} // <== added id parameter ==>
}

export class DeleteBook {
  static readonly type = '[Books] Delete';
  constructor(public id: string) {}
}
