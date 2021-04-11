import * as Joi from '@hapi/joi';
export const ValidateGetBookListModel = Joi.object().keys({
  page: Joi.number().required().error(new Error('Page should be in number.')),
  limit: Joi.number().required().error(new Error('Limit should be in number.')),
  search: Joi.string().optional().allow('').error(new Error('Search should be in characters.'))
});
