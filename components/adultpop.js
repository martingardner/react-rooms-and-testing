import React, { useState, useEffect } from "react";

const Adultpop = props => {
  const [getValue, setValue] = useState(1);

  const updateValue = e => {
    setValue(e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    setValue(1);
  }, [props.disableFields]);

  return (
    <>
      <label>Adults (18+)</label>
      <select onChange={updateValue} value={getValue} disabled={disabled}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default Adultpop;
