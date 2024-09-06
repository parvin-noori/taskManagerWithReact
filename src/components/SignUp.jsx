import "./signUp.css";

import WelcomeSection from "./WelcomeSection";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <div className="h-svh flex items-center justify-center w-svw flex-col">
      <div className="grid lg:grid-cols-2 xl:w-3/5  w-4/5 rounded-xl overflow-hidden shadow-xl mb-3">
        <WelcomeSection />
        <SignUpForm />
      </div>
      <span className="text-gray-400 font-light">
        already have an account?{" "}
        <a href="#" className="capitalize underline">
          login
        </a>
      </span>
    </div>
  );
}
