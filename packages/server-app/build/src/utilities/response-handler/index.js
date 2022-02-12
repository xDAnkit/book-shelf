"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrepareResponse = (data, message, code) => {
    const responseObj = {
        data,
        meta: {
            code,
            message
        }
    };
    return responseObj;
};
exports.default = PrepareResponse;
//# sourceMappingURL=index.js.map