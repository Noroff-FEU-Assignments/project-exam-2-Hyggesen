import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import BigButton from "../components/common/BigButton";
import Input from "../components/common/Input";
import TextArea from "../components/common/Textarea";
function ContactSection() {
  return (
    <BlueSection id="contactSection">
      <div className="container">
        <IntroText content="Reach out" />
        <Heading content="Contact" />
        <ContactForm>
          <Input
            id="fullname"
            placeholder="Full name"
            type="text"
            label="Full name"
          />

          <Input id="email" placeholder="Email" type="text" label="Email" />

          <Input
            id="subject"
            placeholder="Subject"
            type="text"
            label="Subject"
          />

          <TextArea
            id="message"
            placeholder="Message..."
            type="text"
            label="Message"
          />

          <BigButton content="Send" color="#F72585" />
        </ContactForm>
      </div>
    </BlueSection>
  );
}

export default ContactSection;

const BlueSection = styled.div`
  background-color: #fdfcff;
  padding: 200px 0px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
