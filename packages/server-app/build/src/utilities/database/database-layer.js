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
exports.UpdateRecords = exports.UpdateRecord = exports.GetAggregates = exports.CountRecords = exports.GetRecords = exports.GetRecord = exports.CreateMultipleRecord = exports.CreateSingleRecords = exports.INIT_DATABASE = void 0;
let _dbContext;
exports.INIT_DATABASE = (db) => {
    _dbContext = db;
};
//Create
exports.CreateSingleRecords = (model, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].create(payload);
        if (!resultSet) {
            return prepareResponse('Failed to create record');
        }
        return prepareResponse('Records created successfully', true, resultSet);
    }
    catch (error) {
        console.log('@@@Error:', error);
        return prepareResponse('Unable to create record');
    }
});
exports.CreateMultipleRecord = (model, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].insertMany(payload);
        if (!resultSet) {
            return prepareResponse('Failed to create record');
        }
        return prepareResponse('Records created successfully', true, resultSet);
    }
    catch (error) {
        console.log('@@@Error:', error);
        return prepareResponse('Unable to create multiple record');
    }
});
//Read
exports.GetRecord = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].findOne(query);
        if (!resultSet) {
            return prepareResponse('No record found');
        }
        return prepareResponse('Record details found', true, resultSet);
    }
    catch (error) {
        console.log('@@@Error: ', error);
        return prepareResponse('Unable to fetch record');
    }
});
exports.GetRecords = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].find(query);
        if (!resultSet || resultSet.length === 0) {
            return prepareResponse('No records found');
        }
        return prepareResponse('Record list found', true, resultSet);
    }
    catch (error) {
        return prepareResponse('Unable to fetch records');
    }
});
exports.CountRecords = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].countDocuments(query);
        if (!resultSet) {
            return prepareResponse('no record available');
        }
        return prepareResponse('Records count found', true, resultSet);
    }
    catch (error) {
        return prepareResponse('Unable to fetch count');
    }
});
exports.GetAggregates = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].aggregate(query);
        if (!resultSet || resultSet.length === 0) {
            return prepareResponse('No record updated');
        }
        return prepareResponse('Record updated successfully', true, resultSet);
    }
    catch (error) {
        console.log('@@@@error: ', error);
        return prepareResponse('Unable to update count');
    }
});
//Delete
exports.UpdateRecord = (model, query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].findOneAndUpdate(query, payload, {
            new: true
        });
        if (!resultSet) {
            return prepareResponse('No records updated');
        }
        return prepareResponse('Records updated successfully', true, resultSet);
    }
    catch (error) {
        console.log('@@@MJ Error:', error);
        return prepareResponse('Unable to update records');
    }
});
exports.UpdateRecords = (model, query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultSet = yield _dbContext[model].updateMany(query, payload, {
            new: true,
            multi: true
        });
        if (!resultSet) {
            return { hasData: false, message: 'No records updated', resultSet: null };
        }
        return prepareResponse('Records updated successfully', true, resultSet);
    }
    catch (error) {
        return prepareResponse('Unable to update records');
    }
});
const prepareResponse = (message, hasData = false, resultSet = null) => {
    return { hasData, message, resultSet };
};
//# sourceMappingURL=database-layer.js.map