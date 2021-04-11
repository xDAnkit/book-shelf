import * as Hapi from '@hapi/hapi';
import BookController from './book-controller';
import { IServerConfigurations } from '@configurations';
import { ValidateGetBookListModel } from './book-validator';

export default function (server: Hapi.Server, configs: IServerConfigurations) {
  const bookController = new BookController(configs);
  server.bind(bookController);

  server.route({
    method: 'GET',
    path: '/book/list',
    options: {
      handler: bookController.getBookList,
      auth: false,
      tags: ['api', 'book-list', 'book'],
      description: 'Get Books list pagination API.',
      validate: {
        options: {
          abortEarly: false
        },
        query: ValidateGetBookListModel
      }
    }
  });
}
