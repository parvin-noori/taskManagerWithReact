import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    // e.target.reset();
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
