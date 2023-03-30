import * as Joi from 'joi';

export const validationSchema = Joi.object({
  APP_ENV: Joi.string().valid('local', 'development', 'staging', 'production'),
  APP_NAME: Joi.string().default('ISP'),
  APP_PORT: Joi.number().default(3000),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_SYNC: Joi.boolean().required(),
});
