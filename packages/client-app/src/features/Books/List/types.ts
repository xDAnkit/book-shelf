export interface IGetBookListRequest {
  page: number;
  limit: number;
  search: string;
}

export interface IBookItem {
  sysId: string;
  title: string;
  year: number;
  author: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetBookListResponse {
  totalRecords: number | null;
  response: IBookItem[] | null;
}

export interface IGetBookRequestAction {
  type: string;
  params: IGetBookListRequest;
  results: IGetBookListResponse;
}

export interface IGetBookListStateReducer {
  items?: IGetBookListResponse;
  isFetching: boolean;
}

export interface IPropsToState {
  isFetching?: boolean;
}
