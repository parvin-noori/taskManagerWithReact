import React from "react";
import LoginForm from "../components/LoginForm";
import DataCol from "../components/DataCol";
import SubTitle from "../components/SubTitle";

export default function Login() {
  return (
    <>
      <div className="grid lg:grid-cols-2 xl:w-3/5  sm:w-4/5 w-full h-full sm:h-fit sm:rounded-xl overflow-hidden shadow-xl mb-3">
        <DataCol />
        <LoginForm />
      </div>
      <SubTitle anchor="sign up" />
    </>
  );
}
