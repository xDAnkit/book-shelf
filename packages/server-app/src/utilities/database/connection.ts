import * as Mongoose from 'mongoose';
import { IDataConfiguration } from '@configurations';
import * as CollectionConfig from './models';
import { IBook, BookModel } from '@api/books/book';

export interface IDatabase {
  [CollectionConfig.BOOK_MODEL]: Mongoose.Model<IBook>;
}

export function init(config: IDataConfiguration): IDatabase {
  (<any>Mongoose).Promise = Promise;
  Mongoose.connect(process.env.MONGO_URL || config.connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  let mongoDb = Mongoose.connection;

  mongoDb.on('error', () => {
    console.log(`Unable to connect to database: ${config.connectionString}`);
  });

  mongoDb.once('open', () => {
    console.log(`Connected to database: ${config.connectionString}`);
  });

  return {
    [CollectionConfig.BOOK_MODEL]: BookModel,
  };
}
