import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, SUCCESS_STATUS } from '@network/config';
import { getCurrentLocale } from '@i18n';

function* GetRequest(url: string, authentication: boolean = true) {
  const config: AxiosRequestConfig = authentication
    ? yield GetHeadersWithAuthentication()
    : yield GetHeadersWithOutAuthentication();

  const results: AxiosResponse = yield axios.get(`${BASE_URL}${url}`, config);
  const { status, data } = results;
  return status === SUCCESS_STATUS ? data : {};
}

const GetHeadersWithAuthentication = () => {
  const config: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json'
    }
  };
  return config;
};

function* GetHeadersWithOutAuthentication() {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      HTTP_CONTENT_LANGUAGE: getCurrentLocale()
    }
  };
  return config;
}

export { GetRequest as GET };
