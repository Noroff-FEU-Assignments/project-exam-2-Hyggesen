import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import BigButton from "../components/common/BigButton";
import Input from "../components/common/Input";
import TextArea from "../components/common/Textarea";
import { useEffect, useState } from "react";
function ContactSection() {
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [subject, setSubject] = useState();
  const [subjectError, setSubjectError] = useState();
  const [message, setMessage] = useState();
  const [messageError, setMessageError] = useState();
  const [formError, setFormError] = useState();

  function handleContactForm(e) {
    e.preventDefault();

    if (name.length < 3) {
      setNameError("The name must be more than 3 characters.");
      setFormError(true);
    }

    if (name.length > 3) {
      setNameError([]);
      setFormError(false);
    }

    var expression =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi;
    var regex = new RegExp(expression);

    if (!email || !email.match(regex)) {
      setEmailError("* You must enter a valid e-mail address.");
      setFormError(true);
    }

    if (email || email.match(regex)) {
      setEmailError([]);
      setFormError(false);
    }

    if (!subject) {
      setSubjectError("* Please provide a subject.");
      setFormError(true);
    }

    if (subject) {
      setSubjectError([]);
      setFormError(false);
    }

    if (message.length < 10) {
      setMessageError("The message must be more than 10 characters.");
      setFormError(true);
    }

    if (message.length > 10) {
      setMessageError([]);
      setFormError(false);
    }

    if (formError == false) {
      const contactForm = {
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
      };

      fetch(`http://localhost:1337/api/contact-forms?populate=*`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      }).then(() => {
        console.log(contactForm);

        window.location.reload(true);
      });
    }
  }

  return (
    <BlueSection>
      <div className="container" id="contact">
        <IntroText content="Reach out" />
        <Heading content="Contact" />
        <ContactForm onSubmit={handleContactForm} autocomplete="off">
          <Input
            id="name"
            placeholder="Full name"
            type="text"
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error">{nameError}</div>

          <Input
            id="email"
            placeholder="Email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error">{emailError}</div>
          <Input
            id="subject"
            placeholder="Subject"
            type="text"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <div className="error">{subjectError}</div>
          <TextArea
            id="message"
            placeholder="Message..."
            type="text"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="error">{messageError}</div>
          <BigButton content="Send" color="#F72585" aria="Send" />
        </ContactForm>
      </div>
    </BlueSection>
  );
}

export default ContactSection;

const BlueSection = styled.div`
  background-color: #fdfcff;
  padding: 200px 0px;
  @media (max-width: 1024px) {
    padding: 50px 0px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
`;
