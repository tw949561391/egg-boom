'use strict';
const Boom = require('boom');

module.exports = app => {
    Boom.throw = (message, options) => {
        throw new Boom(message, Object.assign({
            statusCode: 500,
        }, options));
    };
    app.Boom = Boom;
};