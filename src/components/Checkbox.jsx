import React from "react";

export default function Checkbox() {
  return (
    <div className="flex gap-2 input-group mb-4">
      <input type="checkbox" id="rememberPassword" className="rounded-lg" />
      <label htmlFor="rememberMe">remember password</label>
    </div>
  );
}
