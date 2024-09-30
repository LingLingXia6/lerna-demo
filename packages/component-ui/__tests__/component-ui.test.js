'use strict';

const componentUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(componentUi(), 'Hello from componentUi');
console.info('componentUi tests passed');
