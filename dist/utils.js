"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateNumber = exports.validateDate = exports.getLocaleDate = exports.getFullLocaleDate = void 0;

var validateNumber = function validateNumber(event) {
  if (event.target.value.length > 0 && /[^0-9]/.test(event.target.value)) {
    event.preventDefault();
    return false;
  }

  return true;
}; // ================================================================
// Getter functions for dates
// ================================================================


exports.validateNumber = validateNumber;

var getLocaleDate = function getLocaleDate(date) {
  return new Date(date - date.getTimezoneOffset() / 60 * 3600000).toLocaleDateString();
};

exports.getLocaleDate = getLocaleDate;

var getFullLocaleDate = function getFullLocaleDate(date) {
  var dts = new Date(date - date.getTimezoneOffset() / 60 * 3600000).toLocaleDateString().split("/");
  return [dts[0].length === 1 ? "0" + dts[0] : dts[0], dts[1].length === 1 ? "0" + dts[1] : dts[1], dts[2].length < 4 ? "0".repeat(4 - dts[2].length) + dts[2] : dts[2]].join("/");
}; // ================================================================
// Validate a date
// ================================================================


exports.getFullLocaleDate = getFullLocaleDate;

var validateDate = function validateDate(date, month, year) {
  var thisDate = new Date("".concat(month, "/").concat(date, "/").concat(year));
  var isThisDateValid = thisDate instanceof Date && !isNaN(thisDate) && thisDate.getDate() === Number(date) && thisDate.getMonth() + 1 === Number(month) && thisDate.getFullYear() === Number(year);
  return {
    thisDate: thisDate,
    isThisDateValid: isThisDateValid
  };
};

exports.validateDate = validateDate;