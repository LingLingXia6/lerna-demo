'use strict';

const useHooks = require('..');
const assert = require('assert').strict;

assert.strictEqual(useHooks(), 'Hello from useHooks');
console.info('useHooks tests passed');
