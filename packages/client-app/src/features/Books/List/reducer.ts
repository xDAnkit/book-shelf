import { GET_BOOKS, GET_BOOKS_FAILED, GET_BOOKS_SUCCEEDED } from './action';
import { IGetBookListStateReducer, IGetBookRequestAction } from './types';

const intialState: IGetBookListStateReducer = {
  isFetching: false,
  items: {
    totalRecords: null,
    response: null
  }
};

const GetBookListReducer = (
  state: IGetBookListStateReducer = intialState,
  action: IGetBookRequestAction
): IGetBookListStateReducer => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        isFetching: true
      };
    case GET_BOOKS_SUCCEEDED:
      return {
        isFetching: false,
        items: action.results
      };
    case GET_BOOKS_FAILED:
      return {
        isFetching: false,
        items: {
          totalRecords: 0,
          response: []
        }
      };
    default:
      return state;
  }
};

export default GetBookListReducer;
