import React from "react";
import { Link } from "react-router-dom";

export default function SubTitle(props) {
  const { anchor } = props;
  return (
    <span className="text-gray-400 font-light">
      already have an account?{" "}
      <Link
        to={`/${anchor.replace(/\s+/g, "").toLowerCase()}`}
        className="capitalize underline"
      >
        {anchor}
      </Link>
    </span>
  );
}
