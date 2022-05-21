import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import BigButton from "../components/common/BigButton";
import Input from "../components/common/Input";
import TextArea from "../components/common/Textarea";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function ContactSection() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [submittingForm, setSubmittingForm] = useState(false);

  function onSubmit(data) {
    const contactForm = {
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    };

    try {
      setSubmittingForm(true);

      const response = axios.post(
        "http://noroff-project-exam-ben.herokuapp.com/api/contact-forms?populate=*",
        contactForm
      );
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finished process");
      setSubmittingForm(false);

      swal({
        title: "Published!",
        text: `Thanks for your enquiry ${data.name}. We will get back to you as soon as possible`,
        icon: "success",
        button: {
          text: "Close",
          className: "sweet-button",
        },
      }).then(function () {
        window.location.reload();
      });
    }
  }

  return (
    <BlueSection>
      <div className="container" id="contact">
        <IntroText content="Reach out" />
        <Heading content="Contact" />
        <ContactForm onSubmit={handleSubmit(onSubmit)} autocomplete="off">
          <Label labelFor="name">Name</Label>
          <TheInput
            id="name"
            placeholder="Full name"
            type="text"
            {...register("name", {
              required: "This field is required.",
              minLength: {
                value: 3,
                message: "Your full name must be over 3 characters.",
              },
            })}
            name="name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="email">Email</Label>
          <TheInput
            id="email"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "This field is required.",
              minLength: {
                value: 3,
                message: "Your email must be over 3 characters.",
              },
            })}
            name="email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="subject">Subject</Label>
          <TheInput
            id="subject"
            placeholder="Subject"
            type="text"
            {...register("subject", {
              required: "This field is required.",
              minLength: {
                value: 3,
                message: "Your subject must be over 3 characters.",
              },
            })}
            name="subject"
          />
          <ErrorMessage
            errors={errors}
            name="subject"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="message">Message</Label>
          <TheTextArea
            id="message"
            placeholder="Message"
            {...register("message", {
              required: "This field is required.",
              minLength: {
                value: 20,
                message: "Your message must be over 20 characters",
              },
              maxLength: {
                value: 200,
                message: "Your message can not be over 200 characters",
              },
            })}
            name="message"
          />
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <BigButton
            content={!submittingForm ? "Send" : "Processing.."}
            color="#F72585"
            aria="Send"
          />
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

const TheInput = styled.input`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 30px;
  padding-left: 10px;
  max-width: 400px;
  width: 100%;
  margin-top: 15px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #19024b;
  align-items: left !important;
  width: 100%;
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const TheTextArea = styled.textarea`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 30px;
  padding-left: 10px;
  max-width: 400px;
  width: 100%;
  margin-top: 15px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;
  min-height: 70px;
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;
