import Navbar from "../components/common/Navbar";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import keycyain from "../assets/brand/keychain.png";
import Footer from "../components/common/Footer";
import BigButton from "../components/common/BigButton";
import Input from "../components/common/Input";
function SignIn() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <Heading content="Sign in" />
          <SignInWrapper>
            <img src={keycyain} />
            <SignInForm>
              <Input
                id="username"
                placeholder="Username"
                type="text"
                label="Username"
              />

              <Input
                id="password"
                placeholder="Password"
                type="text"
                label="Password"
              />
              <BigButton content="Sign in" color="#F72585" href="/admin" />
            </SignInForm>
          </SignInWrapper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;

const SignInWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  max-width: 800px;
  width: 100%;
  justify-content: space-between;
  padding: 100px 0px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;
