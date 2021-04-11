import * as Mongoose from 'mongoose';
import * as DBProvider from './database-layer';

export const CreateRecord = async (model: string, payload: any) => {
  return await DBProvider.CreateSingleRecords(model, payload);
};

export const CreateRecords = async (model: string, payload: any) => {
  return await DBProvider.CreateSingleRecords(model, payload);
};

export const FetchRecord = async (model: string, query: any) => {
  return await DBProvider.GetRecord(model, query);
};

export const FetchRecords = async (model: string, query: any) => {
  return await DBProvider.GetRecords(model, query);
};

export const CountRecords = async (model: string, query: any) => {
  return await DBProvider.CountRecords(model, query);
};

export const DeleteRecord = async (model: string, query: any, payload: any) => {
  return await DBProvider.UpdateRecord(model, query, payload);
};

export const DeleteRecords = async (model: string, query: any, payload: any) => {
  return await DBProvider.UpdateRecords(model, query, payload);
};

export const UpdateRecord = async (model: string, query: any, payload: any) => {
  return await DBProvider.UpdateRecord(model, query, payload);
};

export const UpdateRecords = async (model: string, query: any, payload: any) => {
  return await DBProvider.UpdateRecords(model, query, payload);
};

export const AggregateRecords = async (model: string, query: any) => {
  return await DBProvider.GetAggregates(model, query);
};

export const ConvertToObjectId = (key: string) => {
  return Mongoose.Types.ObjectId(key);
};
