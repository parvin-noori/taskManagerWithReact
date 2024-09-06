import React from "react";

export default function PasswordGroup() {
  return (
    <div className="input-group mb-4 flex gap-2 flex-col">
      <label htmlFor="password" className="capitalize">
        password
      </label>
      <input
        type="password"
        placeholder=""
        id="password"
        className=" shadow-lg rounded-xl border p-2 bg-white outline-none"
        autocomplete="new-password"
      />
    </div>
  );
}
