import { Link } from "react-router-dom";
import React from "react";
import logo from "./../../assets/brand/logo_holidaze.png";
import styled from "styled-components";
import hamburger from "../../assets//brand/hamburgermenu.png";

export default function Navbar(props) {
  function handleToggle() {
    const navUl = document.getElementById("nav-ul");
    navUl.classList.toggle("show");
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
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/hotels">Hotels</Link>
        </Li>
        <Li>
          <Link to="/#contactSection">Contact</Link>
        </Li>
        <Li>
          <Link to="/sign-in">Sign In</Link>
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
