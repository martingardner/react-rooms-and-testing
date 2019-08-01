import React, { useState } from "react";

const Childpop = disableFields => {
  const [getValue, setValue] = useState(0);

  const updateValue = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <label>Children (0-17)</label>
      <select onChange={updateValue} value={getValue}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default Childpop;
