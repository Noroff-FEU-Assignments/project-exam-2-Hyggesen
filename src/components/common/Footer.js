import styled from "styled-components";
import logo from "../../assets/brand/logo_holidaze.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <Flexer>
          <div>
            {" "}
            <img src={logo} alt="holidaze logo" />
          </div>
          <div>
            <Ul>
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
                <StyledLink to="/sign-in">Sign In</StyledLink>
              </Li>
            </Ul>
          </div>
          <div>
            <ContactMail>hello@holidaze.com</ContactMail>
          </div>
        </Flexer>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  background-color: #19024b;
  padding: 200px 0px;
`;

const Flexer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  display: inline-block;
  color: white;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 20px;
`;

const ContactMail = styled.p`
  font-size: 20px;
  color: #f72585;
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

const StyledLink = styled(Link)`
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
