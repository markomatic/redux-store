"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorageKey = exports.getStorageKey = void 0;
var storageKey = '';

var getStorageKey = function getStorageKey() {
  return storageKey;
};

exports.getStorageKey = getStorageKey;

var setStorageKey = function setStorageKey(key) {
  return storageKey = key;
};

exports.setStorageKey = setStorageKey;