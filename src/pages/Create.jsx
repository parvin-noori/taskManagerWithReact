import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // For outlined icons
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import DatePicker from "../components/DatePicker/DatePicker";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Create() {
  function handleSubmit(values) {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    console.log(values);
    // e.target.reset();
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
      <Formik
        initialValues={{ taskName: "", datePicker: null, priority: "" }}
        validationSchema={Yup.object({
          taskName: Yup.string()
            .required("required")
            .min(4, "must be 4 charachter or more"),
          datePicker: Yup.string().required("required"),
          priority: Yup.string().required("required"),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="space-y-7" id="createTask">
            <Field
              as={Input}
              name="taskName"
              label="task Name"
              id="taskName"
              placeholder=""
              error={errors.taskName && touched.taskName ? errors.taskName : ""}
            />
            <Field
              component={DatePicker}
              name="datePicker"
              value={values.DatePicker}
              onChange={(data) => setFieldValue("datePicker", data)}
              error={
                errors.datePicker && touched.datePicker ? errors.datePicker : ""
              }
            />
            <Field
              as={Select}
              id="priority"
              name="priority"
              error={errors.priority && touched.priority ? errors.priority : ""}
            />
            <Button
              type="submit"
              fullWidth={false}
              label="save task"
              className="float-end px-4"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
