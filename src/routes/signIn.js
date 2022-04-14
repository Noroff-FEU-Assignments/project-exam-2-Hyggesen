import Navbar from "../components/common/Navbar";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import keycyain from "../assets/brand/keychain.png";
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
              <label for="username"> Username</label>
              <input id="username" placeholder="username" type="text" />

              <label for="password"> Password</label>
              <input id="password" placeholder="password" type="text" />
              <button type="submit">Sign in</button>
            </SignInForm>
          </SignInWrapper>
        </div>
      </div>
    </>
  );
}

export default SignIn;

const SignInWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  max-width: 600px;
  width: 100%;
  justify-content: space-between;
  padding: 100px 0px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;
