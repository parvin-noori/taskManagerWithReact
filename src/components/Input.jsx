import React from "react";

export default function Input({
  label,
  id,
  placeholder,
  type,
  error = "",
  ...fieldprops
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="capitalize">
        {label}
      </label>
      <input
        type={type}
        {...fieldprops}
        name={label}
        autoComplete="new-password"
        placeholder={placeholder}
        id={id}
        className="w-full shadow-md rounded-xl border p-2 bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 outline-none"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
