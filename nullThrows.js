'use strict';

function nullThrows(x, message) {
  if (x != null) {
    return x;
  }
  var error = new Error(
    message !== undefined ? message : 'A null has been thrown: ' + x
  );
  error.framesToPop = 1; // Skip nullThrows's own stack frame.
  throw error;
}

module.exports = nullThrows;
module.exports.default = nullThrows;

Object.defineProperty(module.exports, '__esModule', { value: true });
