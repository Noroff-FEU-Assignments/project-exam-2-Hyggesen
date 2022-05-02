import { NavLink } from "react-router-dom";
import React from "react";
import logo from "./../../assets/brand/logo_holidaze.png";
import styled from "styled-components";
import hamburger from "../../assets//brand/hamburgermenu.png";
import { HashLink } from "react-router-hash-link";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Navbar(props) {
  function handleToggle() {
    const navUl = document.getElementById("nav-ul");
    navUl.classList.toggle("show");
  }

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/", { replace: true });
  }

  return (
    <Nav>
      <LogoDiv>
        <a href="/">
          <img src={logo} />
        </a>
      </LogoDiv>

      <HamburgerIcon id="menubutton" onClick={handleToggle}>
        <img src={hamburger} />
      </HamburgerIcon>
      <Ul id="nav-ul">
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/hotels">Hotels</StyledLink>
        </Li>
        <Li>
          <StyledHashLink smooth to="/#contactSection">
            Contact
          </StyledHashLink>
        </Li>
        <Li>
          {auth ? (
            <>
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>{" "}
              <button className="NavBtn" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <StyledLink to="/sign-in">Sign In</StyledLink>
          )}
        </Li>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  flex-wrap: wrap;
  background-color: #19024b;
`;

const Li = styled.li`
  display: inline-block;
  color: white;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
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

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHashLink = styled(HashLink)`
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
