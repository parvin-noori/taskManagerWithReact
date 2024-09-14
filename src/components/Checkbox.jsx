import React from "react";

export default function Checkbox(props) {
  const { label, id } = props;
  return (
    <div className="flex  space-y-2 items-center gap-2">
      <input type="checkbox" id={id} className="rounded-lg flex border " />
      <label htmlFor="rememberMe" className="!mt-0">
        {label}
      </label>
    </div>
  );
}
