/* @flow */

var nullThrows = require('../../..');

var obj = ({}: ?Object);

var bad1: Object = obj;
var ok1: Object = nullThrows(obj);

nullThrows(null);
nullThrows(null, 'my error message');
