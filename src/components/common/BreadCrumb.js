import PropTypes from "prop-types";
import styled from "styled-components";

export default function BreadCrumb(props) {
  return (
    <Wrapper>
      <LinkStyled href="/hotels">Hotels&nbsp;/&nbsp;</LinkStyled>

      <ParagraphStyled>{props.content}</ParagraphStyled>
    </Wrapper>
  );
}

BreadCrumb.propTypes = {
  content: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  margin-bottom: 20px;
`;

const ParagraphStyled = styled.p`
  color: #f72585;
  margin: 0px;
  padding: 0px;
  font-size: 16px;
  letter-spacing: 1px;
`;

const LinkStyled = styled.a`
  color: #19024b;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  letter-spacing: 1px;
`;
