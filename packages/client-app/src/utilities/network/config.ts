const GetBaseApplicationURL = (): string => {
  const __STAGING__: boolean = false;
  const __PROD__: boolean = true;

  const devApplicationURL: string = 'http://192.168.0.108:7000/'; // Replace with your local machine URL running application server
  const stageApplicationURL: string = 'http://api-staging.inofficepay.com:7000/';
  const prodApplicationURL: string = 'https://13.127.148.23:7000/';

  if (__PROD__) {
    return prodApplicationURL;
  }

  if (__STAGING__) {
    return stageApplicationURL;
  }

  return devApplicationURL;
};

// * HTTP Status codes
export const SUCCESS_STATUS = 200;
export const SUCCESS_WITH_CREATED_STATUS = 201;
export const UNAUTHORIZED = 401;
export const BAD_REQUEST = 400;
export const SERVER_ERROR = 500;

// * NETWORK API's
export const BASE_URL: string = GetBaseApplicationURL();

// Books API
export const BOOK_LIST_API: string = 'book/list';
