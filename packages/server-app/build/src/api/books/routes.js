"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_controller_1 = require("./book-controller");
const book_validator_1 = require("./book-validator");
function default_1(server, configs) {
    const bookController = new book_controller_1.default(configs);
    server.bind(bookController);
    server.route({
        method: 'GET',
        path: '/book/list',
        options: {
            handler: bookController.getBookList,
            auth: false,
            tags: ['api', 'book-list', 'book'],
            description: 'Get Books list pagination API.',
            validate: {
                options: {
                    abortEarly: false
                },
                query: book_validator_1.ValidateGetBookListModel
            }
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=routes.js.map