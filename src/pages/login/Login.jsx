import LoginForm from "../../components/LoginForm";
import SubTitle from "../../components/SubTitle";
import Container from "../../layout/Container";

export default function Login() {
  return (
    <>
      <Container>
        <LoginForm />
      </Container>
      <SubTitle page="sign up" />
    </>
  );
}
