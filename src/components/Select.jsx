import React from "react";

export default function Select(props) {
  const { id, error, ...fieldprops } = props;
  return (
    <div className="space-y-2">
      <label className="capitalize">
        {id}
        <select
          id={id}
          name={id}
          {...fieldprops}
          className="w-full shadow-md rounded-xl border p-2 bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 outline-none"
          aria-label={id}
          defaultValue=""
        >
          <option value="" disabled>
            select priaroty
          </option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </label>
      {error && <p style={{ color: "red", margin: "5px 0" }}>{error}</p>}
    </div>
  );
}
