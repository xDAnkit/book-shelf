import { IBookItem, IGetBookListRequest, IGetBookListResponse } from './List/types';

export interface IProps {
  bookListResponse?: IGetBookListResponse;
  isFetching: boolean | null;
  onGetBookListRequest(results: IGetBookListRequest): any;
}
export interface IState {
  screenWidth: number;
  search: string;
  page: number;
  limit: number;
  books: {
    hasRecords: boolean | null;
    totalRecords: number | null;
    itemList: IBookItem[] | null;
  };
  isFetching: boolean;
  visibleBookDetailsModal: boolean;
  selectedBook: IBookItem | null;
}

export interface IPropsToState {
  books?: {
    hasRecords: boolean | null;
    totalRecords: number | null;
    itemList: IBookItem[] | null;
  };
  isFetching?: boolean;
}
