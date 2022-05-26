import { NavLink } from "react-router-dom";
import React from "react";
import logo from "./../../assets/common/logo_holidaze.png";
import styled from "styled-components";
import hamburger from "../../assets//common/hamburgermenu.png";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import signOutIcon from "../../assets/common/signout.png";
import signInIcon from "../../assets/common/signin.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleWindowSize() {
    // skjekker riktig størrelse
    if (window.innerWidth >= 1024) {
      // set til false ikke !isOpen
      setIsOpen(false);

      // nullstiller overflow
      document.body.style.overflow = null;

      //og tilslutt avslutter eventlistner
      window.removeEventListener("resize", handleWindowSize);
    }
  }

  function handleToggle() {
    const navUl = document.getElementById("nav-ul");
    navUl.classList.toggle("show");
  }

  function toggleBodyLock() {
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen);
      document.body.style.overflow = document.body.style.overflow
        ? null
        : "hidden";
    }
    window.addEventListener("resize", handleWindowSize);
  }

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/", { replace: true });
  }

  return (
    <Nav>
      <Wrapper>
        <LogoDiv>
          <a href="/">
            <Logo
              src={logo}
              alt="The classic Holidaze logo, with a pink hotel illustration and white text"
            />
          </a>
        </LogoDiv>

        <HamburgerIcon
          id="menubutton"
          onClick={() => {
            handleToggle();
            toggleBodyLock();
          }}
        >
          <Burger src={hamburger} />
        </HamburgerIcon>
      </Wrapper>
      <Ul id="nav-ul">
        <Li>
          <StyledLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleBodyLock}
          >
            Home
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/hotels" onClick={toggleBodyLock}>
            Hotels
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/contact" onClick={toggleBodyLock}>
            Contact
          </StyledLink>
        </Li>

        {auth ? (
          <>
            <Li>
              <StyledLink
                to="/admin"
                className="nav-link"
                onClick={toggleBodyLock}
              >
                Admin
              </StyledLink>
            </Li>

            <Li>
              <AdminWrapper
                to="/admin"
                className="nav-link"
                onClick={toggleBodyLock}
              >
                <StyledLogin>Logged in: </StyledLogin>
                <StyledUsername>
                  {" "}
                  {auth.user.username ? auth.user.username : ""}
                </StyledUsername>
              </AdminWrapper>
            </Li>
            <li>
              <LogOutButton onClick={logout}>
                <LogoutIcon src={signOutIcon} />
                Sign out
              </LogOutButton>
            </li>
          </>
        ) : (
          <StyledLoginButton to="/sign-in">
            {" "}
            <LogoutIcon src={signInIcon} />
            Sign In
          </StyledLoginButton>
        )}
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: #19024b;

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: #19024b;
`;

const Li = styled.li`
  display: inline-block;
  color: white;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 1024px) {
    padding: 20px 0px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

const HamburgerIcon = styled.button`
  background: none;
  color: inherit;

  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: none;
`;

const Burger = styled.img`
  width: 45px;
  height: auto;
  @media (max-width: 480px) {
    width: 35px;
  }
`;

const Logo = styled.img`
  @media (max-width: 480px) {
    width: 150px;
    height: auto;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  position: relative;

  padding: 10px 0px;

  &:before {
    transition: all 0.2s;
  }
  &:after {
    transition: all 0.2s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: #f72585;
    height: 1px;
  }

  &:hover:after {
    width: 100%;
  }
`;

const AdminWrapper = styled.div`
  position: relative;
  font-size: 14px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;

const StyledLogin = styled.p`
  text-decoration: underline;
  margin: 0px;
`;

const StyledUsername = styled.p`
  text-decoration: underline;
  margin: 0px;
`;

const LogOutButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  margin-left: 15px;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    border: 1px solid #f72585;
    color: #f72585;
  }
`;

const LogoutIcon = styled.img`
  margin-right: 10px;
`;

const StyledLoginButton = styled(NavLink)`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  margin-left: 15px;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    border: 1px solid #f72585;
    color: #f72585;
  }
`;
