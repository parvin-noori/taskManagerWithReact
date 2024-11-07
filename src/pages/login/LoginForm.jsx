import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const handleSubmit = async (values) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-type": "Application/json",
      },
      body: JSON.stringify(values),
    });

    const responseJson = await response.json();
    localStorage.setItem("token", responseJson.accessToken);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberPassword: false }}
      validationSchema={Yup.object({
        email: Yup.string().email("invalid email address").required("required"),
        password: Yup.string()
          .min(6, "must be 6 charachter or more")
          .required("required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form id="signUp" className="p-7 text-primary flex flex-col h-full">
          <span className="title capitalize text-2xl font-semibold mb-5 block">
            login
          </span>
          <div className="space-y-4 flex flex-col h-full">
            <Field
              as={Input}
              name="email"
              label="email"
              id="email"
              placeholder="m@example.com"
              error={errors.email && touched.email ? errors.email : ""}
            />

            <Field
              as={Input}
              name="password"
              label="password"
              id="password"
              placeholder=""
              error={errors.password && touched.password ? errors.password : ""}
            />
            <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between space-y-2">
              <Field
                as={Checkbox}
                name="rememberPassword"
                id="rememberPassword"
                label="remember password"
              />
              <Link className="text-sm">i cant remember password</Link>
            </div>
            <Button
              type="submit"
              label="login"
              className="w-full !mt-auto sm:!mt-4"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
