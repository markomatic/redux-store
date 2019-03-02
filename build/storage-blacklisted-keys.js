"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStorageBlacklistedKeys = exports.getStorageBlacklistedKeys = void 0;
var storageBlacklistedKeys = [];

var getStorageBlacklistedKeys = function getStorageBlacklistedKeys() {
  return [].concat(storageBlacklistedKeys);
};

exports.getStorageBlacklistedKeys = getStorageBlacklistedKeys;

var addStorageBlacklistedKeys = function addStorageBlacklistedKeys() {
  return storageBlacklistedKeys.push.apply(storageBlacklistedKeys, arguments);
};

exports.addStorageBlacklistedKeys = addStorageBlacklistedKeys;