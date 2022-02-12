"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserAgent = exports.GetHostName = exports.GetIPAddress = void 0;
exports.GetIPAddress = (request) => {
    const headers = request.headers;
    const xFF = headers['x-forwarded-for'];
    const ipAddress = xFF ? xFF.split(',')[0] : request.info.remoteAddress;
    return ipAddress || 'NA';
};
exports.GetHostName = (request) => {
    const headers = request.headers;
    return headers['host'] || 'NA';
};
exports.GetUserAgent = (request) => {
    const headers = request.headers;
    return headers['user-agent'] || 'NA';
};
//# sourceMappingURL=index.js.map