import * as Hapi from '@hapi/hapi';
import { IPlugin } from '@interfaces';
import { IServerConfigurations } from '@configurations';
import { IDatabase, INIT_DATABASE } from '@database';
import * as Books from '@api/books';

import { InitBooksMockData } from './utilities/mock-data';

export async function init(configs: IServerConfigurations, database: IDatabase): Promise<Hapi.Server> {
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
    const plugins: Array<string> = configs.plugins;
    const pluginOptions = {
      database: database,
      serverConfigs: configs
    };

    let pluginPromises: Promise<any>[] = [];

    plugins.forEach((pluginName: string) => {
      var plugin: IPlugin = require('./plugins/' + pluginName).default();
      console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
      pluginPromises.push(plugin.register(server, pluginOptions));
    });

    await Promise.all(pluginPromises);
    console.log('All plugins registered successfully.');

    console.log('Registering Routes');

    // Init Database Provider
    INIT_DATABASE(database);

    // Init Mock Data
    InitBooksMockData();

    // Init Routes
    Books.init(server, configs);

    console.log('Routes registered sucessfully.');

    return server;
  } catch (err) {
    console.log('Error starting server: ', err);
    throw err;
  }
}
