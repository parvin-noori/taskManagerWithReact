import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

export default function LoginForm() {
  return (
    <form id="signUp" className="p-7 text-primary">
      <span className="title capitalize text-2xl font-semibold mb-5 block">
        login
      </span>
      <div className="space-y-4">
        <Input
          label="username"
          id="signup-username"
          placeholder="enter your username"
          type="text"
        />

        <Input
          label="password"
          id="signup-password"
          placeholder=""
          type="password"
        />
        <div className="flex items-center justify-between">
          <Checkbox id="remember-password" label="remember password" />
          <Link className="text-sm">i cant remember password</Link>
        </div>
        <Button label="login" />
      </div>
    </form>
  );
}
