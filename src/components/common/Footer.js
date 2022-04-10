import styled from "styled-components";
import logo from "../../assets/brand/logo_holidaze.png";
import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
              </Li>
              <Li>
                <Link to="/hotels">Hotels</Link>
              </Li>
              <Li>
                <Link to="/contact">Contact</Link>
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
