import React from "react";

export default function UsernameGroup() {
  return (
    <div className="input-group mb-4 flex gap-2 flex-col">
      <label htmlFor="username" className="capitalize">
        username
      </label>
      <input
        type="text"
        autoComplete="off"
        placeholder="enter your username"
        id="username"
        className=" shadow-lg rounded-xl border p-2 bg-white outline-none"
      />
    </div>
  );
}
