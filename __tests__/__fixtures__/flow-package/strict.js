/* @flow strict */

var nullThrows = require('../../..');

var value = (1: ?number);

var bad1: number = value;
var ok1: number = nullThrows(value);

nullThrows(null);
nullThrows(null, 'my error message');

('this should be an error in strict mode': any);
