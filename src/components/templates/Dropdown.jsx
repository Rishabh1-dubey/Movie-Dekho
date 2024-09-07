import React from "react";

function Dropdown({ title, option , func}) {
  return (
    <div className="select">
      <select defaultValue="0" onChange={func} name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {option.map((o, i) => (
          <option value={0}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
