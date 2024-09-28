import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    e.target.reset();
  }
  return (
    <form
      id="signUp"
      onSubmit={handleSubmit}
      className="p-7 text-primary flex flex-col h-full"
    >
      <span className="title capitalize text-2xl font-semibold mb-5 block">
        login
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
          label="password"
          id="password"
          placeholder=""
          type="password"
          onChange={handleChange}
        />
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between space-y-2">
          <Checkbox
            onChange={handleChange}
            id="rememberPassword"
            label="remember password"
          />
          <Link className="text-sm">i cant remember password</Link>
        </div>
        <Button label="login" className="w-full !mt-auto sm:!mt-4" />
      </div>
    </form>
  );
}
