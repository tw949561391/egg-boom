'use strict';
module.exports = () => {
    return async (ctx, next) => {
        try {
            await
                next();
        } catch (error) {
            if (!ctx.Boom.isBoom(error)) {
                throw ctx.Boom.boomify(error, {statusCode: error.statusCode || error.status || 500});
            } else {
                throw error;
            }
        }
    }
};