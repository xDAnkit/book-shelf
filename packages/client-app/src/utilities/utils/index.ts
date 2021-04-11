import { v4 as uuidv4 } from 'uuid';

export const GetUniqueId = (): string => {
  return uuidv4();
};

export const IsObjEmpty = (payload: object): boolean => {
  return Object.keys(payload).length === 0 ? true : false;
};

export const GetRandomString = (size: number): string => {
  let result = '';
  var characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
  var charactersLength = characters.length;
  for (let i = 0; i < size; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
