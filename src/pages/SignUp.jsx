import DataCol from "../components/DataCol";
import SignUpForm from "../components/SignUpForm";
import SubTitle from "../components/SubTitle";

export default function SignUp() {
  return (
    <>
      <div className="grid lg:grid-cols-2 xl:w-3/5  w-4/5 rounded-xl overflow-hidden shadow-xl mb-3">
        <DataCol />
        <SignUpForm />
      </div>
      <SubTitle anchor="login" />
    </>
  );
}
