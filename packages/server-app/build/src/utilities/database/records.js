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
exports.ConvertToObjectId = exports.AggregateRecords = exports.UpdateRecords = exports.UpdateRecord = exports.DeleteRecords = exports.DeleteRecord = exports.CountRecords = exports.FetchRecords = exports.FetchRecord = exports.CreateRecords = exports.CreateRecord = void 0;
const Mongoose = require("mongoose");
const DBProvider = require("./database-layer");
exports.CreateRecord = (model, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.CreateSingleRecords(model, payload);
});
exports.CreateRecords = (model, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.CreateSingleRecords(model, payload);
});
exports.FetchRecord = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.GetRecord(model, query);
});
exports.FetchRecords = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.GetRecords(model, query);
});
exports.CountRecords = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.CountRecords(model, query);
});
exports.DeleteRecord = (model, query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.UpdateRecord(model, query, payload);
});
exports.DeleteRecords = (model, query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.UpdateRecords(model, query, payload);
});
exports.UpdateRecord = (model, query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.UpdateRecord(model, query, payload);
});
exports.UpdateRecords = (model, query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.UpdateRecords(model, query, payload);
});
exports.AggregateRecords = (model, query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DBProvider.GetAggregates(model, query);
});
exports.ConvertToObjectId = (key) => {
    return Mongoose.Types.ObjectId(key);
};
//# sourceMappingURL=records.js.map