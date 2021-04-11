import { IPlugin } from '@interfaces';
import * as Hapi from '@hapi/hapi';

const register = async (server: Hapi.Server): Promise<void> => {
  try {
    return server.register([
      require('@hapi/inert'),
      require('@hapi/vision'),
      {
        plugin: require('hapi-swagger'),
        options: {
          info: {
            title: 'Book Shelf',
            description: 'Book Shelf Api Documentation',
            version: '1.0'
          },
          tags: [
            {
              name: 'account',
              description: 'Session & Profile Interface.'
            },
            {
              name: 'business-account',
              description: 'Business Accounts Interface.'
            }
          ],
          swaggerUI: true,
          documentationPage: process.env.NODE_ENV !== 'prod',
          documentationPath: '/docs'
        }
      }
    ]);
  } catch (err) {
    console.log(`Error registering swagger plugin: ${err}`);
  }
};

export default (): IPlugin => {
  return {
    register,
    info: () => {
      return { name: 'Swagger Documentation', version: '1.0.0' };
    }
  };
};
