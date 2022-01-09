import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  getLocaleDate,
  getFullLocaleDate,
  validateDate,
  validateNumber,
} from "../utils";

import "./DateInput.scss";
import DateIcon from "../icons/Date.svg";

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
const DateInput = ({
  setInputDate = null,
  outputFormat = "FIXED",
  validClass = "is-valid",
  invalidClass = "is-invalid",
  initialValue = new Date(),
}) => {
  const [date, setDate] = useState({
    d: "",
    m: "",
    y: "",
  });

  useEffect(() => {
    if (!(date.d || date.m || date.y)) {
      let initVal =
        typeof initialValue === "string"
          ? new Date(initialValue)
          : initialValue;
      let d, m, y;

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
        y: String(y).length < 4 ? "0".repeat(4 - y.length) + y : y,
      });
    }
  }, [initialValue]);

  const getterFunction =
    outputFormat === "FIXED"
      ? getFullLocaleDate
      : outputFormat === "LOCALE"
      ? getLocaleDate
      : null;

  const [isValid, setIsValid] = useState(null);

  const handleChangeInput = (inputStateKey) => (e) => {
    if (validateNumber(e)) {
      setDate({ ...date, [inputStateKey]: e.target.value });
    }
  };

  const handleChangeDate = (inputStateKey) => (e) => {
    let fullLength = inputStateKey === "y" ? 4 : 2;

    e.target.value.length === fullLength - 1 &&
      setDate({ ...date, [inputStateKey]: "0" + e.target.value });

    let { thisDate = null, isThisDateValid = false } = validateDate(
      date.d,
      date.m,
      date.y
    );

    if (date.d && date.m && date.y) {
      isThisDateValid
        ? setInputDate(
            getterFunction === null ? thisDate : getterFunction(thisDate)
          )
        : setInputDate(null);
      setIsValid(isThisDateValid);
    } else {
      setIsValid(null);
      setInputDate(null);
    }
  };

  return (
    <div
      className={
        "playdate-input date-input " +
        (isValid === null ? "" : isValid ? validClass : invalidClass)
      }
    >
      <input
        type="text"
        className="day"
        placeholder="dd"
        onChange={handleChangeInput("d")}
        onBlur={handleChangeDate("d")}
        maxLength={2}
        minLength={2}
        value={date.d}
      />
      <span className="input-meta-span">/</span>
      <input
        type="text"
        className="month"
        placeholder="mm"
        onChange={handleChangeInput("m")}
        onBlur={handleChangeDate("m")}
        maxLength={2}
        minLength={2}
        value={date.m}
      />
      <span className="input-meta-span">/</span>
      <input
        type="text"
        className="year"
        placeholder="yyyy"
        onChange={handleChangeInput("y")}
        onBlur={handleChangeDate("y")}
        maxLength={4}
        minLength={4}
        value={date.y}
      />

      <img className="placeholder-icon" src={DateIcon} alt="pick" />
    </div>
  );
};

DateInput.propTypes = {
  setInputDate: PropTypes.oneOf(PropTypes.func, null),
  outputFormat: PropTypes.oneOf("FIXED", "OBJECT", "LOCALE"),
  validClass: PropTypes.string,
  invalidClass: PropTypes.string,
  initialValue: PropTypes.oneOf(PropTypes.object, PropTypes.string),
};

DateInput.defaultProps = {
  setInputDate: null,
  outputFormat: "FIXED",
  validClass: "is-valid",
  invalidClass: "is-invalid",
  initialValue: new Date(),
};

export default DateInput;
