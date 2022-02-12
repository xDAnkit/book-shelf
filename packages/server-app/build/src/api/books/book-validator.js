"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateGetBookListModel = void 0;
const Joi = require("@hapi/joi");
exports.ValidateGetBookListModel = Joi.object().keys({
    page: Joi.number().required().error(new Error('Page should be in number.')),
    limit: Joi.number().required().error(new Error('Limit should be in number.')),
    search: Joi.string().optional().allow('').error(new Error('Search should be in characters.'))
});
//# sourceMappingURL=book-validator.js.map