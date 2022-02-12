"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _database_1 = require("@database");
const _response_1 = require("@response");
const _http_codes_1 = require("@http-codes");
const aggregates_1 = require("./aggregates");
class ExpenseController {
    constructor(configs) {
        this.configs = configs;
        this.dbModel = _database_1.BOOK_MODEL;
    }
    getBookList(request, h) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, limit, search } = request.query;
            const searchBookListQuery = {
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
            const sortQuery = {
                title: -1
            };
            const aggrQuery = aggregates_1.GetBookListPaginationAggrQuery(searchBookListQuery, sortQuery, page, limit);
            const taskResponse = yield _database_1.AggregateRecords(this.dbModel, aggrQuery);
            const results = taskResponse['resultSet'];
            if (!taskResponse['hasData'] || results.length === 0) {
                const res = _response_1.default({}, 'No books found', _http_codes_1.SUCCESS_STATUS);
                return h.response(res).code(_http_codes_1.SUCCESS_STATUS);
            }
            const res = _response_1.default({ results: results[0] }, 'Books list found', _http_codes_1.SUCCESS_STATUS);
            return h.response(res).code(_http_codes_1.SUCCESS_STATUS);
        });
    }
}
exports.default = ExpenseController;
//# sourceMappingURL=book-controller.js.map