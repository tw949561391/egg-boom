'use strict';
const BuildBoom = require('./lib/buildBoom');

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  if (index > -1) {
    app.config.coreMiddleware.splice(index, 0, 'boom');
  }
  BuildBoom(app);
};