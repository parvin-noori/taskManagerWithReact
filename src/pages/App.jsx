import React from "react";
import { Link } from "react-router-dom";
import { GiftIcon } from "@heroicons/react/24/outline"; 

export default function App() {
  return (
    <div className="flex flex-col p-8 xl:w-3/5 space-y-3 justify-center  items-center w-4/5 rounded-xl overflow-hidden shadow-xl mb-3">
      <GiftIcon className="size-12"/>
      <span className="text-2xl font-semibold capitalize">welcome, jenny!</span>
      <p className="text-gray-400 font-light">
        let's get started on your task today
      </p>
      <Link to="/create" className="bg-primary text-white px-4 py-2 rounded-xl">
        add new task
      </Link>
    </div>
  );
}
