import Checkbox from "./Checkbox";
import EmailGroup from "./EmailGroup";
import PasswordGroup from "./PasswordGroup";
import UsernameGroup from "./UsernameGroup";

export default function SignUpForm() {
  return (
    <form id="signUp" className="p-7 text-primary">
      <span className="title capitalize text-2xl font-semibold mb-5 block">
        sign up
      </span>
      <UsernameGroup />
      <EmailGroup />
      <PasswordGroup />
      <Checkbox />
      <button
        type="submit"
        className="capitalize bg-primary text-white p-2 rounded-xl w-full"
      >
        sign up
      </button>
    </form>
  );
}
