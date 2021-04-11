export interface IHTTPConfig {
  Accept: string;
  Authorization?: string;
}

export interface IHTTPUrl {
  url: string;
}

interface IMeta {
  message: string;
  code: number;
}
interface IData {
  results?: any;
}
export interface IHTTPResponse {
  data: IData;
  meta: IMeta;
}

export type IGetHeadersWithAuthenticationForFile = {[name: string]: string};
