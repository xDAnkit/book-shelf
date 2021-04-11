import * as nconf from 'nconf';
import * as path from 'path';

//Read Configurations
const configs = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: 'file',
    file: path.join(__dirname, `./config.${process.env.NODE_ENV || 'dev'}.json`)
  }
});

export interface IServerConfigurations {
  port: number;
  baseUrl: string;
  applicationURL: string;
  env: string;
  plugins: Array<string>;
  jwtSecret: string;
  jwtExpiration: string;
  routePrefix: string;
  attachmentDir: string;
}

export interface IRedisConfiguration {
  redis: any;
}

export interface IApplicationConfig {
  redis: IRedisConfiguration;
}
export interface IDataConfiguration {
  connectionString: string;
}

export function getDatabaseConfig(): IDataConfiguration {
  return configs.get('database');
}

export function getServerConfigs(): IServerConfigurations {
  return configs.get('server');
}

export function getApplicationConfigs(): IApplicationConfig {
  return configs.get('application');
}
