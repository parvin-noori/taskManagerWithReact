import React from "react";
import { Link } from "react-router-dom";

export default function SubTitle(props) {
  const { page } = props;
  return (
    <span className="text-gray-400 font-light text-center">
      already have an account?{" "}
      <Link
        to={`/${page.replace(/\s+/g, "").toLowerCase()}`}
        className="capitalize underline"
      >
        {page}
      </Link>
    </span>
  );
}
