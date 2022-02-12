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
exports.InitBooksMockData = void 0;
const _database_1 = require("@database");
const database_layer_1 = require("../database/database-layer");
const books_1 = require("./data/books");
/**
 * @description {This method is used to generate the mock data. Note: MongoDB should be started while running this}
 * This is run only once to init the data
 */
exports.InitBooksMockData = () => __awaiter(void 0, void 0, void 0, function* () {
    const hasBooksData = yield _database_1.CountRecords(_database_1.BOOK_MODEL, { STATUS: true, isActive: true });
    if (hasBooksData.hasData) {
        console.log('Mock data already available');
        return;
    }
    const hasBooksAdded = yield database_layer_1.CreateMultipleRecord(_database_1.BOOK_MODEL, books_1.BOOKS_LIST);
    if (!hasBooksAdded.hasData) {
        console.log('Unable to load Mock data');
        return;
    }
    console.log('Mock data loaded successfully');
    return;
});
//# sourceMappingURL=index.js.map