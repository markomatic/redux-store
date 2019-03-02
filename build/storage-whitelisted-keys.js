"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStorageWhitelistedKeys = exports.getStorageWhitelistedKeys = void 0;
var storageWhitelistedKeys = [];

var getStorageWhitelistedKeys = function getStorageWhitelistedKeys() {
  return [].concat(storageWhitelistedKeys);
};

exports.getStorageWhitelistedKeys = getStorageWhitelistedKeys;

var addStorageWhitelistedKeys = function addStorageWhitelistedKeys() {
  return storageWhitelistedKeys.push.apply(storageWhitelistedKeys, arguments);
};

exports.addStorageWhitelistedKeys = addStorageWhitelistedKeys;