"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomString = exports.AppendUserHeaderInformation = exports.IsObjEmpty = exports.GetUniqueId = void 0;
const uuid_1 = require("uuid");
exports.GetUniqueId = () => {
    return uuid_1.v4();
};
exports.IsObjEmpty = (payload) => {
    return Object.keys(payload).length === 0 ? true : false;
};
exports.AppendUserHeaderInformation = (params, request) => {
    const headers = request.headers;
    let resonsePayload = Object.assign({}, params);
    const xFF = request.headers['x-forwarded-for'];
    const ipAddress = xFF ? xFF.split(',')[0] : request.info.remoteAddress;
    resonsePayload['userAgent'] = headers['user-agent'];
    resonsePayload['hostName'] = headers['host'];
    resonsePayload['ipAddress'] = ipAddress;
    return resonsePayload;
};
exports.GetRandomString = (size) => {
    let result = '';
    var characters = 'ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz123456789_';
    var charactersLength = characters.length;
    for (let i = 0; i < size; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
//# sourceMappingURL=index.js.map