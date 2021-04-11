import { IGetBookListRequest, IGetBookListResponse } from './types';

export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_SUCCEEDED = 'GET_BOOKS_SUCCEEDED';
export const GET_BOOKS_FAILED = 'GET_BOOKS_FAILED';

export const getBooksAction = (params: IGetBookListRequest) => {
  return { type: GET_BOOKS, params };
};

export const getBooksSuccessAction = (results: IGetBookListResponse) => {
  return { type: GET_BOOKS_SUCCEEDED, results };
};

export const getBooksFailedAction = () => {
  return { type: GET_BOOKS_FAILED };
};
