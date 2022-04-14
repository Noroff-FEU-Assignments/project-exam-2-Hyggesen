import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";

function ContactSection() {
  return (
    <BlueSection id="contactSection">
      <div className="container">
        <IntroText content="Reach out" />
        <Heading content="Contact" />
        <ContactForm>
          <label for="fullname"> Full name</label>
          <input id="fullname" placeholder="Full name" type="text" />

          <label for="email"> Email</label>
          <input id="email" placeholder="Email" type="text" />

          <label for="subject"> Subject</label>
          <input id="subject" placeholder="Subject" type="text" />

          <label for="message"> Message</label>
          <textarea id="message" placeholder="Message" />

          <button type="submit">Sign in</button>
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
