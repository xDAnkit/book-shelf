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
exports.init = void 0;
const Hapi = require("@hapi/hapi");
const _database_1 = require("@database");
const Books = require("@api/books");
const mock_data_1 = require("./utilities/mock-data");
function init(configs, database) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const port = process.env.PORT || configs.port;
            const server = new Hapi.Server({
                debug: { request: ['error'] },
                port: port,
                routes: {
                    payload: { timeout: 15000 },
                    cors: {
                        origin: ['*'],
                        additionalHeaders: ['HTTP_CONTENT_LANGUAGE', '*']
                    }
                }
            });
            if (configs.routePrefix) {
                server.realm.modifiers.route.prefix = configs.routePrefix;
            }
            //  Setup Hapi Plugins
            const plugins = configs.plugins;
            const pluginOptions = {
                database: database,
                serverConfigs: configs
            };
            let pluginPromises = [];
            plugins.forEach((pluginName) => {
                var plugin = require('./plugins/' + pluginName).default();
                console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
                pluginPromises.push(plugin.register(server, pluginOptions));
            });
            yield Promise.all(pluginPromises);
            console.log('All plugins registered successfully.');
            console.log('Registering Routes');
            // Init Database Provider
            _database_1.INIT_DATABASE(database);
            // Init Mock Data
            mock_data_1.InitBooksMockData();
            // Init Routes
            Books.init(server, configs);
            console.log('Routes registered sucessfully.');
            return server;
        }
        catch (err) {
            console.log('Error starting server: ', err);
            throw err;
        }
    });
}
exports.init = init;
//# sourceMappingURL=server.js.map