'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _ = require('lodash');

/**
 * Detect HTTP verb in an expression.
 *
 * @api private
 */
const MAX_LENGTH = 255

exports.validateEmail = email => {
  if (String(email).length > MAX_LENGTH) return false;
  var re = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  return re.test(String(email).toLowerCase());
}
exports.validatePassword = pass => {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return re.test(String(pass));
}
exports.detectRoute = endpoint => {
  const verbExpr = /^(all|get|post|put|delete|trace|options|connect|patch|head|redirect)\s+/i;
  let verb = _.last(endpoint.match(verbExpr) || []) || '';
  verb = verb.toLowerCase();

  // If a verb was specified, eliminate the verb from the original string.
  if (verb) {
    endpoint = endpoint.replace(verbExpr, '');
  }

  // Return the verb and the endpoint.
  return {
    verb,
    endpoint
  };
};
