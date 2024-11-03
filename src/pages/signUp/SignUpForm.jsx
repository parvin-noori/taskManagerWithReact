import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
// import { supabase } from "../../helper/config";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        />
        <Input
          label="email"
          id="email"
          placeholder="m@example.com"
          type="email"
          onChange={handleChange}
        />
        <Input
          label="password"
          id="password"
          placeholder=""
          type="password"
          onChange={handleChange}
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
