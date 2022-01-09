import React, { useState } from "react";
import DateInput from "../components/DateInput";

const DateInputExample = () => {
  const [date, setDate] = useState("");
  const handleDateChange = (date) => setDate(date);

  return (
    <div>
      <h3>Simple date input</h3>
      <p className="lead">
        The DateInput component validates dates dynamically
      </p>

      <DateInput
        setInputDate={handleDateChange}
        initialValue={new Date("02/12/2021")}
      />
      <p className="mt-3">
        Date input value :{" "}
        {date === null
          ? "null"
          : date instanceof Date
          ? date.toISOString()
          : date}
      </p>
    </div>
  );
};

export default DateInputExample;
