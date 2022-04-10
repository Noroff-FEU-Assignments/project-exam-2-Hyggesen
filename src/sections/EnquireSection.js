import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";

function EnquireSection() {
  return (
    <BlueSection>
      <div className="container">
        <IntroText content="Reach out" />
        <Heading content="Enquires" />
      </div>
    </BlueSection>
  );
}

export default EnquireSection;

const BlueSection = styled.div`
  background-color: #fdfcff;
  padding: 200px 0px;
`;
