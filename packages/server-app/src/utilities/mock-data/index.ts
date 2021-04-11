import { BOOK_MODEL, CountRecords } from '@database';
import { IDBResponse } from '@interfaces';
import { CreateMultipleRecord } from '../database/database-layer';
import { BOOKS_LIST } from './data/books';

/**
 * @description {This method is used to generate the mock data. Note: MongoDB should be started while running this}
 * This is run only once to init the data
 */
export const InitBooksMockData = async () => {
  const hasBooksData: IDBResponse = await CountRecords(BOOK_MODEL, { STATUS: true, isActive: true });
  if (hasBooksData.hasData) {
    console.log('Mock data already available');
    return;
  }

  const hasBooksAdded = await CreateMultipleRecord(BOOK_MODEL, BOOKS_LIST);
  if (!hasBooksAdded.hasData) {
    console.log('Unable to load Mock data');
    return;
  }
  console.log('Mock data loaded successfully');
  return;
};
