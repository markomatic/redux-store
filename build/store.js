"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatch = exports.getStoreAsync = void 0;

var _redux = require("redux");

var _reduxStorageDecoratorFilter = _interopRequireDefault(require("redux-storage-decorator-filter"));

var _reduxLogger = require("redux-logger");

var _reduxStorageEngineLocalstorage = _interopRequireDefault(require("redux-storage-engine-localstorage"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var storage = _interopRequireWildcard(require("redux-storage"));

var _middlewares = require("./middlewares");

var _reducers = require("./reducers");

var _sagas = require("./sagas");

var _storageBlacklistedKeys = require("./storage-blacklisted-keys");

var _storageKey = require("./storage-key");

var _storageWhitelistedKeys = require("./storage-whitelisted-keys");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var store;
var engine;

var initStore = function initStore() {
  var sagaMiddleware = (0, _reduxSaga.default)();
  var middlewares = [(0, _reduxLogger.createLogger)(), sagaMiddleware].concat(_toConsumableArray((0, _middlewares.getMiddlewares)()));
  var reducer = (0, _redux.combineReducers)((0, _reducers.getReducers)());
  var storageKey = (0, _storageKey.getStorageKey)();

  if (!storageKey) {
    store = (0, _redux.createStore)(reducer, _redux.applyMiddleware.apply(void 0, _toConsumableArray(middlewares)));
    sagaMiddleware.run(_sagas.rootSaga);
    return;
  }

  engine = (0, _reduxStorageDecoratorFilter.default)((0, _reduxStorageEngineLocalstorage.default)(storageKey), (0, _storageWhitelistedKeys.getStorageWhitelistedKeys)(), (0, _storageBlacklistedKeys.getStorageBlacklistedKeys)());

  var createStoreWithMiddleware = _redux.applyMiddleware.apply(void 0, _toConsumableArray(middlewares).concat([storage.createMiddleware(engine)]))(_redux.createStore);

  store = createStoreWithMiddleware(storage.reducer(reducer));
  sagaMiddleware.run(_sagas.rootSaga);
};

var getStoreAsync =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!store) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", store);

          case 2:
            initStore();

            if (!engine) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return storage.createLoader(engine)(store);

          case 6:
            return _context.abrupt("return", store);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getStoreAsync() {
    return _ref.apply(this, arguments);
  };
}();

exports.getStoreAsync = getStoreAsync;

var dispatch = function dispatch() {
  var _store;

  return (_store = store).dispatch.apply(_store, arguments);
};

exports.dispatch = dispatch;