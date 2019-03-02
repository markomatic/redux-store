"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootSaga = rootSaga;
exports.registerSagas = void 0;

var _effects = require("redux-saga/effects");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

var sagas = [];

var getSagas = function getSagas() {
  return [].concat(sagas);
};

var registerSagas = function registerSagas() {
  return sagas.push.apply(sagas, arguments);
};

exports.registerSagas = registerSagas;

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(getSagas());

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}