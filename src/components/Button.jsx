import React from "react";

export default function Button(props) {
  const { label,className } = props;
  return (
    <button
      type="submit"
      className={`capitalize  p-2 rounded-xl bg-primary text-white ${className}`}
    >
     {label}
    </button>
  );
}
