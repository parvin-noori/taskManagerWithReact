import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// import { supabase } from "../../helper/config";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  // const formValidate = () => {
  //   const newErrors = {};
  //   if (!userInfo.username) {
  //     newErrors.username = "username is required";
  //   } else {
  //     if (userInfo.username.lenght < 5) {
  //       newErrors.username = "username must be at least 5 char";
  //     }
  //   }

  //   if (!userInfo.email) {
  //     newErrors.email = "email is required";
  //   } else {
  //     const emailRegex = /\S+@\S+\.\S+/;
  //     if (!emailRegex.test(userInfo.email)) {
  //       newErrors.email = "please enter a valid email address";
  //     }
  //   }

  //   if (!userInfo.password) {
  //     newErrors.password = "password is required";
  //   } else {
  //     if (userInfo.password.length < 6) {
  //       newErrors.password = "password must be at least 6 char";
  //     }
  //   }

  //   setErrors(newErrors);
  //   console.log(Object.keys(newErrors) === 0);
  //   return Object.keys(newErrors).length === 0;
  // };

  const handleSubmit = async (values) => {
    console.log(values);
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "content-type": "Application/json",
      },
      body: JSON.stringify(values),
    });
    const responseJson = await response.json();
    localStorage.setItem("token", responseJson.accessToken);

    // use supabse api
    // const { data, error } = await supabase.auth.signUp({
    //   email: userInfo.email,
    //   password: userInfo.password,
    // });
    // console.log(data.session.access_token);
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        rememberPassword: false,
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(5, "username must be 5 charachter or more")
          .required("required"),
        email: Yup.string().email("invali email address").required("required"),
        password: Yup.string()
          .min(6, "username must be 6 charachter or more")
          .required("required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form id="signUp" className="p-7 text-primary flex flex-col h-full">
          <span className="title capitalize text-2xl font-semibold mb-5 block">
            sign up
          </span>
          <div className="space-y-4 flex flex-col h-full">
            <Field
              as={Input}
              name="username"
              label="username"
              id="username"
              placeholder="enter your username"
              error={errors.username && touched.username ? errors.username : ""}
            />
            <Field
              as={Input}
              label="email"
              name="email"
              id="email"
              placeholder="m@example.com"
              error={errors.email && touched.email ? errors.email : ""}
            />
            <Field
              as={Input}
              label="password"
              id="password"
              name="password"
              placeholder=""
              error={errors.password && touched.password ? errors.password : ""}
            />
            <Checkbox id="remember-password" label="remember password" />
            <Button
              type="submit"
              label="sign up"
              className="w-full !mt-auto sm:!mt-4"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
