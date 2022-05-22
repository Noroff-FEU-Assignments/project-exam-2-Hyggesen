import Navbar from "../components/common/Navbar";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import keycyain from "../assets/common/keychain.png";
import Footer from "../components/common/Footer";
import BigButton from "../components/common/BigButton";
import Input from "../components/common/Input";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Helmet from "react-helmet";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (auth) {
      navigate("/admin", { replace: true });
    }
  }, [auth, navigate]);

  async function HandleSignIn(e) {
    e.preventDefault();

    setSubmitting(true);
    setLoginError(null);

    const logIn = {
      identifier: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://noroff-project-exam-ben.herokuapp.com/api/auth/local",
        logIn
      );
      localStorage.setItem("Token", response.data.jwt);
      setAuth(response.data);
      navigate("/admin", { replace: true });
    } catch (error) {
      setLoginError("Login request failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Sign in</title>
        <meta name="description" content="Sign in to admin panel" />
      </Helmet>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <Heading content="Sign in" />
          <SignInWrapper>
            <Keys src={keycyain} alt="Pink keychain illustration" />
            <SignInForm onSubmit={HandleSignIn}>
              <Input
                autocomp="username"
                id="username"
                placeholder="Username"
                type="text"
                label="Username"
                value={username ?? ""}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Input
                autocomp="current-password"
                id="password"
                placeholder="Password"
                type="password"
                label="Password"
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
              />
              <BigButton
                content={submitting ? "Signing in.." : "Sign in"}
                color="#F72585"
                href="/admin"
              />
              {loginError}
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
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    padding: 0px 0px;
    margin-top: 20px;
  }
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const Keys = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;
