'use strict';

/**
 * Description:
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */

function notFoundHandler (request, response, next) {
    response.status(404).send('Not Found');
}

module.exports = notFoundHandler;