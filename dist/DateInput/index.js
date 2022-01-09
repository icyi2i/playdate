"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

require("./DateInput.scss");

var _Date = _interopRequireDefault(require("../icons/Date.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param  setInputDate
 * function to update state/call dispatch
 *
 * @param  outputFormat
 * One of the three =>
 * - FIXED : "dd/mm/yyyy" (Default)
 * - LOCALE : "d/m/y" without padding of 0
 * - OBJECT : javascript Date object
 *
 * @param  validClass
 * Style class to apply on valid date. Default "is-valid"
 *
 * @param  invalidClass
 * Style class to apply on invalid date.
 * Default "is-invalid"
 *
 * @param  initialValue
 * Can be a date object, date string or object with
 * keys d,m,and y
 */
var DateInput = function DateInput(_ref) {
  var _ref$setInputDate = _ref.setInputDate,
      setInputDate = _ref$setInputDate === void 0 ? null : _ref$setInputDate,
      _ref$outputFormat = _ref.outputFormat,
      outputFormat = _ref$outputFormat === void 0 ? "FIXED" : _ref$outputFormat,
      _ref$validClass = _ref.validClass,
      validClass = _ref$validClass === void 0 ? "is-valid" : _ref$validClass,
      _ref$invalidClass = _ref.invalidClass,
      invalidClass = _ref$invalidClass === void 0 ? "is-invalid" : _ref$invalidClass,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? new Date() : _ref$initialValue;

  var _useState = (0, _react.useState)({
    d: "",
    m: "",
    y: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!(date.d || date.m || date.y)) {
      var initVal = typeof initialValue === "string" ? new Date(initialValue) : initialValue;
      var d, m, y;

      if (initVal instanceof Date) {
        d = initVal.getDate();
        m = initVal.getMonth() + 1;
        y = initVal.getFullYear();
      } else if (initVal instanceof Object) {
        d = initVal.d;
        m = initVal.m;
        y = initVal.y;
      }

      setDate({
        d: String(d).length === 1 ? "0" + d : d,
        m: String(m).length === 1 ? "0" + m : m,
        y: String(y).length < 4 ? "0".repeat(4 - y.length) + y : y
      });
    }
  }, [initialValue]);
  var getterFunction = outputFormat === "FIXED" ? _utils.getFullLocaleDate : outputFormat === "LOCALE" ? _utils.getLocaleDate : null;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isValid = _useState4[0],
      setIsValid = _useState4[1];

  var handleChangeInput = function handleChangeInput(inputStateKey) {
    return function (e) {
      if ((0, _utils.validateNumber)(e)) {
        setDate(_objectSpread(_objectSpread({}, date), {}, _defineProperty({}, inputStateKey, e.target.value)));
      }
    };
  };

  var handleChangeDate = function handleChangeDate(inputStateKey) {
    return function (e) {
      var fullLength = inputStateKey === "y" ? 4 : 2;
      e.target.value.length === fullLength - 1 && setDate(_objectSpread(_objectSpread({}, date), {}, _defineProperty({}, inputStateKey, "0" + e.target.value)));

      var _validateDate = (0, _utils.validateDate)(date.d, date.m, date.y),
          _validateDate$thisDat = _validateDate.thisDate,
          thisDate = _validateDate$thisDat === void 0 ? null : _validateDate$thisDat,
          _validateDate$isThisD = _validateDate.isThisDateValid,
          isThisDateValid = _validateDate$isThisD === void 0 ? false : _validateDate$isThisD;

      if (date.d && date.m && date.y) {
        isThisDateValid ? setInputDate(getterFunction === null ? thisDate : getterFunction(thisDate)) : setInputDate(null);
        setIsValid(isThisDateValid);
      } else {
        setIsValid(null);
        setInputDate(null);
      }
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "playdate-input date-input " + (isValid === null ? "" : isValid ? validClass : invalidClass)
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "day",
    placeholder: "dd",
    onChange: handleChangeInput("d"),
    onBlur: handleChangeDate("d"),
    maxLength: 2,
    minLength: 2,
    value: date.d
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "input-meta-span"
  }, "/"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "month",
    placeholder: "mm",
    onChange: handleChangeInput("m"),
    onBlur: handleChangeDate("m"),
    maxLength: 2,
    minLength: 2,
    value: date.m
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "input-meta-span"
  }, "/"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "year",
    placeholder: "yyyy",
    onChange: handleChangeInput("y"),
    onBlur: handleChangeDate("y"),
    maxLength: 4,
    minLength: 4,
    value: date.y
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "placeholder-icon",
    src: _Date.default,
    alt: "pick"
  }));
};

DateInput.propTypes = {
  setInputDate: _propTypes.default.oneOf(_propTypes.default.func, null),
  outputFormat: _propTypes.default.oneOf("FIXED", "OBJECT", "LOCALE"),
  validClass: _propTypes.default.string,
  invalidClass: _propTypes.default.string,
  initialValue: _propTypes.default.oneOf(_propTypes.default.object, _propTypes.default.string)
};
DateInput.defaultProps = {
  setInputDate: null,
  outputFormat: "FIXED",
  validClass: "is-valid",
  invalidClass: "is-invalid",
  initialValue: new Date()
};
var _default = DateInput;
exports.default = _default;