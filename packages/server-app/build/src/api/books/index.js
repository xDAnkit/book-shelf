"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const routes_1 = require("./routes");
function init(server, configs) {
    routes_1.default(server, configs);
}
exports.init = init;
//# sourceMappingURL=index.js.map