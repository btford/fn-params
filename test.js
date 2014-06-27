var assert = require('assert'),
    fnArgs = require('./fn');

assert.deepEqual(fnArgs(function (a, b, c) { /* lalala */ }), ['a', 'b', 'c']);
