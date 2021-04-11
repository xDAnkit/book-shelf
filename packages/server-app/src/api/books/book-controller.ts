import * as Hapi from '@hapi/hapi';

import { IServerConfigurations } from '@configurations';
import { AggregateRecords, BOOK_MODEL } from '@database';
import { IDBResponse } from '@interfaces';
import PrepareResponse from '@response';
import { SUCCESS_STATUS } from '@http-codes';

import { IBookListQuery, IGetBookListRequest, ISortBooksQuery } from './types';
import { GetBookListPaginationAggrQuery } from './aggregates';

export default class ExpenseController {
  private configs: IServerConfigurations;
  private dbModel: string;
  constructor(configs: IServerConfigurations) {
    this.configs = configs;
    this.dbModel = BOOK_MODEL;
  }
  public async getBookList(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    const { page, limit, search } = <IGetBookListRequest>request.query;
    const searchBookListQuery: IBookListQuery = {
      isActive: true,
      STATUS: true
    };

    if (search) {
      searchBookListQuery['$or'] = [
        {
          sysId: new RegExp(search, 'i')
        },
        {
          title: new RegExp(search, 'i')
        },
        {
          description: new RegExp(search, 'i')
        },
        {
          year: new RegExp(search, 'i')
        },
        {
          price: new RegExp(search, 'i')
        },
        {
          price: new RegExp(search, 'i')
        },
        {
          author: new RegExp(search, 'i')
        }
      ];
    }

    const sortQuery: ISortBooksQuery = {
      title: -1
    };
    const aggrQuery = GetBookListPaginationAggrQuery(searchBookListQuery, sortQuery, page, limit);
    const taskResponse: IDBResponse = await AggregateRecords(this.dbModel, aggrQuery);
    const results = taskResponse['resultSet'];
    if (!taskResponse['hasData'] || results.length === 0) {
      const res = PrepareResponse({}, 'No books found', SUCCESS_STATUS);
      return h.response(res).code(SUCCESS_STATUS);
    }

    const res = PrepareResponse({ results: results[0] }, 'Books list found', SUCCESS_STATUS);
    return h.response(res).code(SUCCESS_STATUS);
  }
}
