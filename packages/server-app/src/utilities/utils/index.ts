import { v4 as uuidv4 } from 'uuid';

export const GetUniqueId = (): string => {
  return uuidv4();
};

export const IsObjEmpty = (payload: object): boolean => {
  return Object.keys(payload).length === 0 ? true : false;
};

export const AppendUserHeaderInformation = (params: any, request) => {
  const headers = request.headers;
  let resonsePayload: any = { ...params };
  const xFF = request.headers['x-forwarded-for'];
  const ipAddress = xFF ? xFF.split(',')[0] : request.info.remoteAddress;

  resonsePayload['userAgent'] = headers['user-agent'];
  resonsePayload['hostName'] = headers['host'];
  resonsePayload['ipAddress'] = ipAddress;
  return resonsePayload;
};

export const GetRandomString = (size: number): string => {
  let result = '';
  var characters: string = 'ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz123456789_';
  var charactersLength = characters.length;
  for (let i = 0; i < size; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
