"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMiddlewares = exports.getMiddlewares = void 0;
var middlewares = [];

var getMiddlewares = function getMiddlewares() {
  return [].concat(middlewares);
};

exports.getMiddlewares = getMiddlewares;

var registerMiddlewares = function registerMiddlewares() {
  return middlewares.push.apply(middlewares, arguments);
};

exports.registerMiddlewares = registerMiddlewares;