'use strict';
module.exports = () => {
    return async (ctx, next) => {
        try {
            await
                next();
        } catch (error) {
            if (!ctx.Boom.isBoom(error)) {
                throw ctx.Boom.boomify(error, {statusCode: e.statusCode || e.status || 500});
            } else {
                throw error;
            }
        }
    }
};