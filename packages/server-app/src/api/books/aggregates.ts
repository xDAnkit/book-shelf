import { IBookListQuery, ISortBooksQuery } from './types';

export const GetBookListPaginationAggrQuery = (
  searchQuery: IBookListQuery,
  sortQuery: ISortBooksQuery,
  page: number,
  limit: number
) => {
  let skip = 0;
  if (page > 1) {
    skip = (page - 1) * limit;
  }
  const agg = [
    { $match: searchQuery },
    {
      $facet: {
        records: [{ $sort: sortQuery }, { $skip: skip }, { $limit: limit }],
        info: [{ $group: { _id: null, count: { $sum: 1 } } }]
      }
    },
    {
      $project: {
        _id: 0,
        totalRecords: { $arrayElemAt: ['$info.count', 0] },
        response: {
          $map: {
            input: '$records',
            as: 'item',
            in: {
              sysId: '$$item.sysId',
              title: '$$item.title',
              year: '$$item.year',
              description: '$$item.description',
              author: '$$item.author',
              createdAt: '$$item.createdAt',
              updatedAt: '$$item.updatedAt'
            }
          }
        }
      }
    }
  ];
  return agg;
};
