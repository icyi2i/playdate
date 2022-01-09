export const validateNumber = (event) => {
  if (event.target.value.length > 0 && /[^0-9]/.test(event.target.value)) {
    event.preventDefault();
    return false;
  }
  return true;
};

// ================================================================
// Getter functions for dates
// ================================================================
export const getLocaleDate = (date) => {
  return new Date(
    date - (date.getTimezoneOffset() / 60) * 3600000
  ).toLocaleDateString();
};

export const getFullLocaleDate = (date) => {
  let dts = new Date(date - (date.getTimezoneOffset() / 60) * 3600000)
    .toLocaleDateString()
    .split("/");
  return [
    dts[0].length === 1 ? "0" + dts[0] : dts[0],
    dts[1].length === 1 ? "0" + dts[1] : dts[1],
    dts[2].length < 4 ? "0".repeat(4 - dts[2].length) + dts[2] : dts[2],
  ].join("/");
};

// ================================================================
// Validate a date
// ================================================================
export const validateDate = (date, month, year) => {
  let thisDate = new Date(`${month}/${date}/${year}`);

  let isThisDateValid =
    thisDate instanceof Date &&
    !isNaN(thisDate) &&
    thisDate.getDate() === Number(date) &&
    thisDate.getMonth() + 1 === Number(month) &&
    thisDate.getFullYear() === Number(year);

  return {
    thisDate,
    isThisDateValid,
  };
};
