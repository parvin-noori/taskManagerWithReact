import React from "react";

export default function Checkbox(props) {
  const { label, id, onChange } = props;
  return (
    <div className="flex  space-y-2 items-center gap-2">
      <input
        type="checkbox"
        name={id}
        defaultChecked={false}
        onChange={onChange}
        id={id}
        className="rounded-lg flex border "
      />
      <label htmlFor="rememberMe" className="!mt-0">
        {label}
      </label>
    </div>
  );
}
