import SignUpForm from "./SignUpForm";
import SubTitle from "../../components/SubTitle";
import Container from "../../layout/Container";

export default function SignUp() {
  return (
    <>
      <Container>
        <SignUpForm />
      </Container>
      <SubTitle page="login" />
    </>
  );
}
