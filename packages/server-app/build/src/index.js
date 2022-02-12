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
require('module-alias/register');
const Server = require("./server");
const _database_1 = require("@database");
const Configs = require("@configurations");
console.log(`Running environment ${process.env.NODE_ENV || 'dev'}`);
// Catch unhandling unexpected exceptions
process.on('uncaughtException', (error) => {
    console.error(`uncaughtException ${error.message}`);
});
// Catch unhandling rejected promises
process.on('unhandledRejection', (reason) => {
    console.error(`unhandledRejection :  ${reason}`);
});
// Define async start function
const start = ({ config, db }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = yield Server.init(config, db);
        yield server.start();
        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.error('Error starting server: ', err.message);
        throw err;
    }
});
// Init Database
const dbConfigs = Configs.getDatabaseConfig();
const database = _database_1.InitDatabase(dbConfigs);
// Starting Application Server
const serverConfigs = Configs.getServerConfigs();
// Start the server
start({ config: serverConfigs, db: database });
//# sourceMappingURL=index.js.map