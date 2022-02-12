"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const Mongoose = require("mongoose");
const CollectionConfig = require("./models");
const book_1 = require("@api/books/book");
function init(config) {
    Mongoose.Promise = Promise;
    Mongoose.connect(process.env.MONGO_URL || config.connectionString, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    let mongoDb = Mongoose.connection;
    mongoDb.on('error', () => {
        console.log(`Unable to connect to database: ${config.connectionString}`);
    });
    mongoDb.once('open', () => {
        console.log(`Connected to database: ${config.connectionString}`);
    });
    return {
        [CollectionConfig.BOOK_MODEL]: book_1.BookModel,
    };
}
exports.init = init;
//# sourceMappingURL=connection.js.map