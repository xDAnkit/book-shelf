import * as Hapi from '@hapi/hapi';

export const GetIPAddress = (request: Hapi.Request) => {
  const headers = request.headers;
  const xFF = headers['x-forwarded-for'];
  const ipAddress = xFF ? xFF.split(',')[0] : request.info.remoteAddress;
  return ipAddress || 'NA';
};

export const GetHostName = (request: Hapi.Request) => {
  const headers = request.headers;
  return headers['host'] || 'NA';
};

export const GetUserAgent = (request: Hapi.Request) => {
  const headers = request.headers;
  return headers['user-agent'] || 'NA';
};
