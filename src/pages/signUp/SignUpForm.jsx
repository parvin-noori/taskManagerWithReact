import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("username", username);
    console.log("email", email);
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
        sign up
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
          label="email"
          id="signup-email"
          placeholder="m@example.com"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="password"
          id="signup-password"
          placeholder=""
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox id="remember-password" label="remember password" />
        <Button label="sign up" className="w-full !mt-auto sm:!mt-4" />
      </div>
    </form>
  );
}
