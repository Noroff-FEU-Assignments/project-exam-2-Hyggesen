import PropTypes from "prop-types";
import styled from "styled-components";
import HeadingTwo from "./HeadingTwo";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
export default function AddHotel(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [submittingForm, setSubmittingForm] = useState(false);

  function onSubmit(data) {
    const hotel = {
      data: {
        name: data.name,
        description: data.description,
        score: data.score,
        km_to_city_centre: data.km_to_city_centre,
        address: data.address,
        thumbnail_url: data.thumbnail_url,
        price: data.price,
        spa: data.spa,
        balcony: data.balcony,
        internet: data.internet,
        fitness_room: data.fitnessRoom,
        breakfast_included: data.breakfast,
        bar: data.bar,
        city: data.city,
        headlight_feature_1: data.highlight_1,
        headlight_feature_2: data.highlight_2,
        headlight_feature_3: data.highlight_3,
        featured: data.featured,
      },
    };

    const tkn = localStorage.getItem("Token");
    const config = {
      headers: { Authorization: `Bearer ${tkn}` },
    };

    try {
      setSubmittingForm(true);
      /* eslint-disable no-unused-vars */
      const response = axios.post(
        "https://noroff-project-exam-ben.herokuapp.com/api/hotels?populate=*",
        hotel,
        config
      );
      /* eslint-disable no-unused-vars */
    } catch (error) {
      console.log(error);
    } finally {
      setSubmittingForm(false);

      swal({
        title: "Success!",
        text: `You added ${data.name} successfully.`,
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
        <HeadingTwo content="Add a new hotel" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label labelFor="name">Name</Label>
          <TheInput
            id="name"
            placeholder="Name of hotel"
            type="text"
            {...register("name", {
              required: "Please enter the hotel name.",
              minLength: {
                value: 5,
                message: "The hotel name must be over 5 characters",
              },
            })}
            name="name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="description">Description</Label>
          <TheTextArea
            id="description"
            placeholder="Description"
            {...register("description", {
              required: "Please write a description.",
              minLength: {
                value: 20,
                message: "The description must be over 20 characters",
              },
              maxLength: {
                value: 600,
                message: "The description can not be over 600 characters",
              },
            })}
            name="description"
          />
          <ErrorMessage
            errors={errors}
            name="description"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="score">Score</Label>
          <TheInput
            id="score"
            placeholder="Score"
            type="text"
            {...register("score", {
              required: "A hotel score is required.",
              max: {
                value: 10,
                message: "Max score is 10",
              },
              pattern: {
                value: /^(0|[1-9]\d*)$/,
                message: "Enter a number from 1 to 10",
              },
            })}
            name="score"
          />
          <ErrorMessage
            errors={errors}
            name="score"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="km_to_city_centre">Kilometer to city centre</Label>
          <TheInput
            id="km_to_city_centre"
            placeholder="Kilometer to city centre"
            type="text"
            {...register("km_to_city_centre", {
              required: "Please enter the distance from the city centre.",
              pattern: {
                value: /^\d+(\.\d{0,2})?$/,
                message: "That is not a valid number",
              },
            })}
            name="km_to_city_centre"
          />
          <ErrorMessage
            errors={errors}
            name="km_to_city_centre"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="address">Address</Label>
          <TheInput
            id="address"
            placeholder="Address"
            type="text"
            {...register("address", {
              required: "Please enter the address.",
            })}
            name="address"
          />
          <ErrorMessage
            errors={errors}
            name="address"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="thumbnail_url">Thumbnail URL</Label>
          <TheInput
            id="thumbnail_url"
            placeholder="Thumbnail URL"
            type="text"
            {...register("thumbnail_url", {
              required: "Please enter a thumbnail URL.",
              pattern: {
                value:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                message: "That is not a value URL",
              },
            })}
            name="thumbnail_url"
          />
          <ErrorMessage
            errors={errors}
            name="thumbnail_url"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="price">Price</Label>
          <TheInput
            id="price"
            placeholder="Price"
            type="number"
            {...register("price", {
              required: "Please enter the hotel price.",
              max: {
                value: 9999,
                message: "Price can not be higher than 9999,-",
              },
            })}
            name="price"
          />
          <ErrorMessage
            errors={errors}
            name="price"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="spa">Spa</Label>
          <Select
            id="spa"
            {...register("spa", {
              required: "This field is required",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="spa"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="balcony">Balcony</Label>
          <Select
            id="balcony"
            {...register("balcony", {
              required: "This field is required",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="balcony"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="internet">Internet</Label>
          <Select
            id="internet"
            {...register("internet", {
              required: "This field is required",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="internet"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="fitnessRoom">Fitness room</Label>
          <Select
            id="fitnessRoom"
            {...register("fitnessRoom", {
              required: "This field is required",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="fitnessRoom"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="breakfast">Breakfast included</Label>
          <Select
            id="breakfast"
            {...register("breakfast", {
              required: "This field is required",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="breakfast"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="bar">Bar</Label>
          <Select
            id="bar"
            {...register("bar", {
              required: "This field is required",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="bar"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="city">City</Label>
          <TheInput
            id="city"
            placeholder="city"
            type="text"
            {...register("city", {
              required: "Please enter the city.",
            })}
            name="city"
          />
          <ErrorMessage
            errors={errors}
            name="city"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="highlight_1">Highlight 1</Label>
          <TheInput
            id="highlight_1"
            placeholder="This feature will stand out"
            type="text"
            {...register("highlight_1", {
              required: "Please enter a feature to highlight.",
            })}
            name="highlight_1"
          />
          <ErrorMessage
            errors={errors}
            name="highlight_1"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="highlight_2">Highlight 2</Label>
          <TheInput
            id="highlight_2"
            placeholder="This feature will stand out"
            type="text"
            {...register("highlight_2", {
              required: "Please enter a feature to highlight.",
            })}
            name="highlight_2"
          />
          <ErrorMessage
            errors={errors}
            name="highlight_2"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="highlight_3">Highlight 3</Label>
          <TheInput
            id="highlight_3"
            placeholder="This feature will stand out"
            type="text"
            {...register("highlight_3", {
              required: "Please enter a feature to highlight.",
            })}
            name="highlight_3"
          />
          <ErrorMessage
            errors={errors}
            name="highlight_3"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <Label labelFor="featured">Featured</Label>
          <Select
            id="featured"
            placeholder="Feature this hotel?"
            {...register("featured", {
              required: "This field is required.",
            })}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
          <ErrorMessage
            errors={errors}
            name="featured"
            render={({ message }) => <p className="error">{message}</p>}
          />

          <ButtonWrap>
            <CancelButton onClick={props.cancelClick}>Cancel</CancelButton>
            <AddHotelButton>
              {submittingForm === false ? "Add hotel" : "Processing.."}
            </AddHotelButton>
          </ButtonWrap>
        </Form>
      </Wrapper>
    </>
  );
}

AddHotel.propTypes = {
  cancelClick: PropTypes.func,
};
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const AddHotelButton = styled.button`
  font-size: 20px;
  color: white;
  background-color: #f72585;
  font-weight: 600;
  border-radius: 8px;
  border: none;
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

const Select = styled.select`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 30px;
  padding-left: 10px;
  max-width: 500px;
  width: 100%;
  margin: 15px 0px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;
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
  margin-bottom: 10px;

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 10px;
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
  margin-bottom: 10px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;
  min-height: 70px;
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;
