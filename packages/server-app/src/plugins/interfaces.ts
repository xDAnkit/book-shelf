import * as Hapi from '@hapi/hapi';
import { IDatabase } from '@database';
import { IServerConfigurations } from '@configurations';

export interface IPluginOptions {
  database: IDatabase;
  serverConfigs: IServerConfigurations;
}

export interface IPlugin {
  register(server: Hapi.Server, options?: IPluginOptions): Promise<void>;
  info(): IPluginInfo;
}

export interface IPluginInfo {
  name: string;
  version: string;
}

export interface IDBResponse {
  hasData: boolean;
  message: string;
  resultSet: any;
}
