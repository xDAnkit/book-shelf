export interface ICreateRecord {
  modalName: string;
  payload: any;
}
export interface IFetchRecord {
  modalName: string;
  searchQuery: any;
}

export interface IDeleteRecord {
  modalName: string;
  searchQuery: any;
  updatePayload: any;
}

export interface IUpdateRecord {
  modalName: string;
  searchQuery: any;
  updatePayload: any;
}

export interface IAggregateQuery {
  modalName: string;
  searchQuery: any;
}

export interface IConvertToObject {
  key: string;
}
