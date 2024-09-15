import React from "react";

export default function Select(props) {
  const { id } = props;
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="capitalize">{id}</label>
      <select
        id={id}
        name={id}
        className="w-full shadow-md rounded-xl border p-2 bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 outline-none"
        aria-label={id}
        required
        defaultValue=""
      >
        <option value="" disabled>
          select priaroty
        </option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
    </div>
  );
}
