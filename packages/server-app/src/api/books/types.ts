export interface IGetBookListRequest {
  page: number;
  limit: number;
  search: any;
}

interface ISearchItem {
  [key: string]: any;
}
export interface IBookListQuery {
  $or?: ISearchItem[];
  isActive: boolean;
  STATUS: boolean;
}

export interface ISortBooksQuery {
  title: number;
}
