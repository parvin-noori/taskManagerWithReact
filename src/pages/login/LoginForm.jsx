import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);
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
          id="signup-username"
          placeholder="enter your username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          label="password"
          id="signup-password"
          placeholder=""
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between space-y-2">
          <Checkbox id="rememberPassword" label="remember password" />
          <Link className="text-sm">i cant remember password</Link>
        </div>
        <Button label="login" className="w-full !mt-auto sm:!mt-4" />
      </div>
    </form>
  );
}