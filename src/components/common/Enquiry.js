import PropTypes from "prop-types";
import styled from "styled-components";
import HeadingTwo from "./HeadingTwo";
import Input from "./Input";
export default function Enquiry(props) {
  return (
    <>
      <Wrapper>
        <HeadingTwo content={props.hotelName} />
        <Form>
          <Input
            id="fromdate"
            placeholder="Check-in date"
            type="date"
            label="Check-in date"
            value={props.fromDateValue}
            onChange={props.fromDateChange}
          />
          <div className="error">{props.orderFromDateError}</div>
          <Input
            id="todate"
            placeholder="Check-out date"
            type="date"
            label="Check-out date"
            value={props.toDateValue}
            onChange={props.toDateChange}
          />
          <div className="error">{props.orderToDateError}</div>
          <Input
            id="name"
            placeholder="Full name"
            type="text"
            label="Full name"
            value={props.nameValue}
            onChange={props.nameChange}
          />
          <div className="error">{props.orderNameError}</div>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            label="Email"
            value={props.emailValue}
            onChange={props.emailChange}
          />
          <div className="error">{props.orderEmailError}</div>
          <Input
            id="guests"
            placeholder="Guests"
            type="number"
            label="Guests"
            value={props.guestsValue}
            onChange={props.guestsChange}
          />
          <div className="error">{props.orderGuestsError}</div>
          <ButtonWrap>
            {" "}
            <CancelButton onClick={props.cancelClick}>Cancel</CancelButton>
            <OrderButton type="submit" onClick={props.orderClick}>
              {props.buttonContent}
            </OrderButton>
          </ButtonWrap>
          <div className="error">{props.orderFormError}</div>
        </Form>
      </Wrapper>
    </>
  );
}

Enquiry.propTypes = {
  hotelName: PropTypes.string.isRequired,
  href: PropTypes.string,
  cancelClick: PropTypes.func,
  orderClick: PropTypes.func,
  nameValue: PropTypes.string,
  nameChange: PropTypes.func,
  emailValue: PropTypes.string,
  emailChange: PropTypes.func,
  toDateValue: PropTypes.string,
  toDateChange: PropTypes.func,
  fromDateValue: PropTypes.string,
  fromDateChange: PropTypes.func,
  guestsValue: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.number,
    PropTypes.string,
  ]),
  guestsChange: PropTypes.func,
  orderFromDateError: PropTypes.string,
  orderToDateError: PropTypes.string,
  orderNameError: PropTypes.string,
  orderEmailError: PropTypes.string,
  orderGuestsError: PropTypes.string,
  orderFormError: PropTypes.bool,
  buttonContent: PropTypes.string,
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

const OrderButton = styled.div`
  font-size: 20px;
  color: white;
  background-color: #f72585;
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
