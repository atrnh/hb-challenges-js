'use strict';

const assert = require('assert');

/**
 * Using a binary search, find val in range 1-100. Return # of guesses.
 */
const binarySearch = val => {
  // Start solution here
};

/**
 * Node.js and Jasmine stuff.
 */
module.exports = binarySearch;

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.onComplete(passed => {
  passed ?
    console.log('All tests passed!') :
    console.log('At least one spec has failed.');
});

jasmine.execute(['./binarysearchSpec.js']);
