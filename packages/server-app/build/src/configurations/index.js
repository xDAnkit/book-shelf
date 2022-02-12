"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicationConfigs = exports.getServerConfigs = exports.getDatabaseConfig = void 0;
const nconf = require("nconf");
const path = require("path");
//Read Configurations
const configs = new nconf.Provider({
    env: true,
    argv: true,
    store: {
        type: 'file',
        file: path.join(__dirname, `./config.${process.env.NODE_ENV || 'dev'}.json`)
    }
});
function getDatabaseConfig() {
    return configs.get('database');
}
exports.getDatabaseConfig = getDatabaseConfig;
function getServerConfigs() {
    return configs.get('server');
}
exports.getServerConfigs = getServerConfigs;
function getApplicationConfigs() {
    return configs.get('application');
}
exports.getApplicationConfigs = getApplicationConfigs;
//# sourceMappingURL=index.js.map