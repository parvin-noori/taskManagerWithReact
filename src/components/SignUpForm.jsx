import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

export default function SignUpForm() {
  return (
    <form id="signUp" className="p-7 text-primary flex flex-col h-full">
      <span className="title capitalize text-2xl font-semibold mb-5 block">
        sign up
      </span>
      <div className="space-y-4 flex flex-col h-full">
        <Input
          label="username"
          id="signup-username"
          placeholder="enter your username"
          type="text"
        />
        <Input
          label="email"
          id="signup-email"
          placeholder="m@example.com"
          type="email"
        />
        <Input
          label="password"
          id="signup-password"
          placeholder=""
          type="password"
        />
        <Checkbox id="remember-password" label="remember password" />
        <Button label="sign up" className="w-full !mt-auto sm:!mt-4" />
      </div>
    </form>
  );
}
