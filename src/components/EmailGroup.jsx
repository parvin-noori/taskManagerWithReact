import React from "react";

export default function EmailGroup() {
  return (
    <div className="input-group mb-4 flex gap-2 flex-col">
      <label htmlFor="email" className="capitalize">
        email
      </label>
      <input
        type="email"
        placeholder="m@example.com"
        id="email"
        className=" shadow-lg rounded-xl border p-2 bg-white outline-none"
      />
    </div>
  );
}
