import { IResponseResults } from './types';
const PrepareResponse = (data: any, message: string, code: number) => {
  const responseObj: IResponseResults = {
    data,
    meta: {
      code,
      message
    }
  };
  return responseObj;
};

export default PrepareResponse;
