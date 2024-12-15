const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const executiveSchema = Joi.object({
  name: Joi.string().required(),
  about: Joi.string().required(),
  socialLinks: Joi.array().items(Joi.string().uri()),
  image: Joi.string().required(),
});

// Add more schemas as needed
module.exports = { registerSchema, executiveSchema };
