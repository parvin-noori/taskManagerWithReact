import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // For outlined icons
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

export default function Create() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    e.target.reset();
  }
  return (
    <div className="p-8 xl:w-3/5 space-y-3 w-4/5 rounded-xl overflow-hidden shadow-xl mb-3">
      <Link
        to="/"
        className="inline-flex items-center gap-3 capitalize text-gray-500 border py-2 px-4 rounded-xl shadow-lg"
      >
        <ArrowLeftIcon className="size-5" />
        back
      </Link>
      <span className="capitalize block text-2xl font-semibold text-center">
        create new task
      </span>
      <form className="space-y-7" onSubmit={handleSubmit} id="createTask">
        <Input label="task name" type="text" placeholder="enter task name" />
        <Input label="due date" type="date" placeholder="select due date" />
        <Select id="priority" />
        <Button
          fullWidth={false}
          label="save task"
          className="float-end px-4"
        />
      </form>
    </div>
  );
}
