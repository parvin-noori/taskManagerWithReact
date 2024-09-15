import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // For outlined icons

export default function List() {
  return (
    <div className="p-8 xl:w-3/5 space-y-3 w-4/5 rounded-xl overflow-hidden shadow-xl mb-3">
      <Link
        to="/create"
        className="inline-flex items-center gap-3 capitalize text-gray-500 border py-2 px-4 rounded-xl shadow-lg"
      >
        <ArrowLeftIcon className="size-5" />
        back
      </Link>
      <span className="capitalize block text-2xl font-semibold text-center">
        tasks
      </span>
    </div>
  );
}
