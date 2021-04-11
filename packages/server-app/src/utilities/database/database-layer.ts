import { IDatabase } from '@database';

let _dbContext: any;

export const INIT_DATABASE = (db: IDatabase) => {
  _dbContext = db;
};

//Create
export const CreateSingleRecords = async (model: string, payload: any) => {
  try {
    const resultSet = await _dbContext[model].create(payload);
    if (!resultSet) {
      return prepareResponse('Failed to create record');
    }
    return prepareResponse('Records created successfully', true, resultSet);
  } catch (error) {
    console.log('@@@Error:', error);
    return prepareResponse('Unable to create record');
  }
};

export const CreateMultipleRecord = async (model: string, payload: any) => {
  try {
    const resultSet = await _dbContext[model].insertMany(payload);
    if (!resultSet) {
      return prepareResponse('Failed to create record');
    }
    return prepareResponse('Records created successfully', true, resultSet);
  } catch (error) {
    console.log('@@@Error:', error);
    return prepareResponse('Unable to create multiple record');
  }
};

//Read
export const GetRecord = async (model: string, query: any) => {
  try {
    const resultSet = await _dbContext[model].findOne(query);
    if (!resultSet) {
      return prepareResponse('No record found');
    }
    return prepareResponse('Record details found', true, resultSet);
  } catch (error) {
    console.log('@@@Error: ', error);
    return prepareResponse('Unable to fetch record');
  }
};

export const GetRecords = async (model: string, query: any) => {
  try {
    const resultSet = await _dbContext[model].find(query);
    if (!resultSet || resultSet.length === 0) {
      return prepareResponse('No records found');
    }
    return prepareResponse('Record list found', true, resultSet);
  } catch (error) {
    return prepareResponse('Unable to fetch records');
  }
};

export const CountRecords = async (model: string, query: any) => {
  try {
    const resultSet = await _dbContext[model].countDocuments(query);
    if (!resultSet) {
      return prepareResponse('no record available');
    }
    return prepareResponse('Records count found', true, resultSet);
  } catch (error) {
    return prepareResponse('Unable to fetch count');
  }
};

export const GetAggregates = async (model: string, query: any) => {
  try {
    const resultSet = await _dbContext[model].aggregate(query);
    if (!resultSet || resultSet.length === 0) {
      return prepareResponse('No record updated');
    }
    return prepareResponse('Record updated successfully', true, resultSet);
  } catch (error) {
    console.log('@@@@error: ', error);
    return prepareResponse('Unable to update count');
  }
};

//Delete
export const UpdateRecord = async (model: string, query: any, payload: any) => {
  try {
    const resultSet = await _dbContext[model].findOneAndUpdate(query, payload, {
      new: true
    });
    if (!resultSet) {
      return prepareResponse('No records updated');
    }
    return prepareResponse('Records updated successfully', true, resultSet);
  } catch (error) {
    console.log('@@@MJ Error:', error);
    return prepareResponse('Unable to update records');
  }
};

export const UpdateRecords = async (model: string, query: any, payload: any) => {
  try {
    const resultSet = await _dbContext[model].updateMany(query, payload, {
      new: true,
      multi: true
    });
    if (!resultSet) {
      return { hasData: false, message: 'No records updated', resultSet: null };
    }
    return prepareResponse('Records updated successfully', true, resultSet);
  } catch (error) {
    return prepareResponse('Unable to update records');
  }
};

const prepareResponse = (message: string, hasData: boolean = false, resultSet: any = null) => {
  return { hasData, message, resultSet };
};
