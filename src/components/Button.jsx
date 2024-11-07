import React from "react";

export default function Button(props) {
  const { label, className, type = "" } = props;
  return (
    <button
      type={type}
      className={`capitalize  p-2 rounded-xl bg-primary text-white ${className}`}
    >
      {label}
    </button>
  );
}
