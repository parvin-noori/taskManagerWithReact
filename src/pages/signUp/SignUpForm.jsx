import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
// import { supabase } from "../../helper/config";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  const formValidate = () => {
    const newErrors = {};
    if (!userInfo.username) {
      newErrors.username = "username is required";
    } else {
      if (userInfo.username.lenght < 5) {
        newErrors.username = "username must be at least 5 char";
      }
    }

    if (!userInfo.email) {
      newErrors.email = "email is required";
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(userInfo.email)) {
        newErrors.email = "please enter a valid email address";
      }
    }

    if (!userInfo.password) {
      newErrors.password = "password is required";
    } else {
      if (userInfo.password.length < 6) {
        newErrors.password = "password must be at least 6 char";
      }
    }

    setErrors(newErrors);
    console.log(Object.keys(newErrors) === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValidate()) {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          Accept: "Application/json",
          "content-type": "Application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const responseJson = await response.json();
      localStorage.setItem("token", responseJson.accessToken);
      e.target.reset();
    }

    // use supabse api
    // const { data, error } = await supabase.auth.signUp({
    //   email: userInfo.email,
    //   password: userInfo.password,
    // });
    // console.log(data.session.access_token);
  };
  return (
    <form
      id="signUp"
      onSubmit={handleSubmit}
      className="p-7 text-primary flex flex-col h-full"
    >
      <span className="title capitalize text-2xl font-semibold mb-5 block">
        sign up
      </span>
      <div className="space-y-4 flex flex-col h-full">
        <Input
          label="username"
          id="username"
          placeholder="enter your username"
          type="text"
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          label="email"
          id="email"
          placeholder="m@example.com"
          type="email"
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          label="password"
          id="password"
          placeholder=""
          type="password"
          onChange={handleChange}
          error={errors.password}
        />
        <Checkbox
          onChange={handleChange}
          id="remember-password"
          label="remember password"
        />
        <Button label="sign up" className="w-full !mt-auto sm:!mt-4" />
      </div>
    </form>
  );
}
