import React from "react";

export default function Button(props) {
  const { label } = props;
  return (
    <button
      type="submit"
      className="capitalize bg-primary text-white p-2 rounded-xl w-full"
    >
     {label}
    </button>
  );
}
