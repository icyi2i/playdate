# PlayDate

A simple datetime components library!

## Components

### DateInput

A simple date input with built-in validations.

#### Usage

```
import React, { useState } from "react";
import DateInput from "../components/DateInput";

const DateInputExample = () => {
  const [date, setDate] = useState("02/12/2021");
  const handleDateChange = (d) => setDate(d);

  return (
    <div>
      <DateInput
        setInputDate={handleDateChange}
        initialValue={date}
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
```
