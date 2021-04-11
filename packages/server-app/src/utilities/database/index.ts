export {
  BOOK_MODEL
} from './models';
export {
  CreateRecord,
  CreateRecords,
  FetchRecord as GetRecord,
  FetchRecords as GetRecords,
  CountRecords,
  DeleteRecord,
  DeleteRecords,
  UpdateRecord,
  UpdateRecords,
  AggregateRecords,
  ConvertToObjectId
} from './records';

export { init as InitDatabase } from './connection';

export { INIT_DATABASE } from './database-layer';

export { IDatabase } from './connection';
