import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function SignUpForm() {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [email, setEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("username", signUpUsername);
    console.log("email", email);
    console.log("password", signUpPassword);
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
          onChange={(e) => setSignUpUsername(e.target.value)}
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
          onChange={(e) => setsignUpPassword(e.target.value)}
        />
        <Checkbox id="remember-password" label="remember password" />
        <Button label="sign up" className="w-full !mt-auto sm:!mt-4" />
      </div>
    </form>
  );
}
