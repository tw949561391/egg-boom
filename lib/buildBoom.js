'use strict';
const Boom = require('boom');

module.exports = app => {
  Boom.throw = (message, options) => {
    if (!options) {
      options = {
        statusCode: 500,
      };
    }
    throw new Boom(message, options);
  };
  app.Boom = Boom;
};