import PropTypes from "prop-types";
import styled from "styled-components";
import HeadingTwo from "./HeadingTwo";
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
export default function Order(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [submitOrder, setSubmitOrder] = useState(false);

  function onSubmit(data) {
    const order = {
      data: {
        toDate: data.toDate,
        fromDate: data.fromDate,
        name: data.name,
        email: data.email,
        guests: data.guests,
        hotels: props.id,
      },
    };

    try {
      setSubmitOrder(true);
      /* eslint-disable no-unused-vars */
      const response = axios.post(
        "https://noroff-project-exam-ben.herokuapp.com/api/orders/?populate=*",
        order
      );
      /* eslint-disable no-unused-vars */
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitOrder(false);

      swal({
        title: "Success!",
        text: `Thanks ${data.name} for booking a room at ${props.hotelName}. We are awaiting ${data.guests} guests from ${data.toDate} to ${data.fromDate} `,
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
    <>
      <Wrapper>
        <HeadingTwo content={props.hotelName} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label labelFor="toDate">Check-in date</Label>
          <TheInput
            id="toDate"
            type="date"
            {...register("toDate", {
              required: "Please enter your check-in date.",
            })}
            name="toDate"
          />
          <ErrorMessage
            errors={errors}
            name="toDate"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="fromDate">Check-out date</Label>
          <TheInput
            id="fromDate"
            type="date"
            {...register("fromDate", {
              required: "Please enter your check-out date.",
            })}
            name="fromDate"
          />
          <ErrorMessage
            errors={errors}
            name="fromDate"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="name">Name</Label>
          <TheInput
            id="name"
            placeholder="Full name"
            type="text"
            {...register("name", {
              required: "Please enter your name.",
              minLength: {
                value: 4,
                message: "Your name must be over 4 characters.",
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
            type="text"
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "That email address is invalid.",
              },
            })}
            name="email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="guests">Guests</Label>
          <TheInput
            id="guests"
            placeholder="Guests"
            type="number"
            {...register("guests", {
              required: "Please enter the amount of visitors.",
              max: {
                value: 5,
                message: "Max amount of guest per room is 5",
              },
              pattern: {
                value: /^[1-9]+[0-9]*$/,
                message: "Value must be 1 or more",
              },
            })}
            name="guests"
          />
          <ErrorMessage
            errors={errors}
            name="guests"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <ButtonWrap>
            {" "}
            <CancelButton onClick={props.cancelClick}>Cancel</CancelButton>
            <OrderButton type="submit">
              {!submitOrder ? "Submit" : "Processing.."}
            </OrderButton>
          </ButtonWrap>
        </Form>
      </Wrapper>
    </>
  );
}
Order.propTypes = {
  hotelName: PropTypes.string.isRequired,
  cancelClick: PropTypes.func,
  id: PropTypes.any,
};
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  @media (max-width: 550px) {
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  @media (max-width: 550px) {
    width: 420px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 550px) {
    flex-direction: column;
    height: 120px;
  }
`;

const CancelButton = styled.div`
  font-size: 20px;
  color: white;
  background-color: #19024b;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 50px;

  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);

    cursor: pointer;
  }
`;

const OrderButton = styled.button`
  font-size: 20px;
  color: white;
  background-color: #f72585;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 230px;
  height: 50px;

  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);

    cursor: pointer;
  }
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
