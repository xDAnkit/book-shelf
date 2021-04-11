export interface IMeta {
  message: string;
  code: number;
}

export interface IResponseResults {
  data: any;
  meta: IMeta;
}
