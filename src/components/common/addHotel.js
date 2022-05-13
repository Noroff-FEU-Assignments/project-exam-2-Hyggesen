import PropTypes from "prop-types";
import styled from "styled-components";
import HeadingTwo from "./HeadingTwo";
import Input from "./Input";
import TextArea from "./Textarea";
import { useState } from "react";
import swal from "sweetalert";

export default function AddHotel(props) {
  const [score, setScore] = useState(0);
  const [scoreError, setScoreError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [kilometer, setKilometer] = useState(0);
  const [kilometerError, setKilometerError] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailError, setThumbnailError] = useState("");

  const [price, setPrice] = useState(0);
  const [priceError, setPriceError] = useState("");

  const [spa, setSpa] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [internet, setInternet] = useState(false);
  const [fitnessRoom, setFitnessRoom] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [bar, setBar] = useState(false);

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");

  const [highlight1, setHighlight1] = useState("");
  const [highlight1Error, setHighlight1Error] = useState("");

  const [highlight2, setHighlight2] = useState("");
  const [highlight2Error, setHighlight2Error] = useState("");

  const [highlightError3, setHighlight3Error] = useState("");

  const [highlight3, setHighlight3] = useState("");

  const [featured, setFeatured] = useState(false);
  const [submitAddHotel, setsubmitAddHotel] = useState(false);

  const [validate, setValidate] = useState(false);

  const handleAddHotel = async (e) => {
    e.preventDefault();
    setsubmitAddHotel(true);

    if (
      nameError === "" &&
      descriptionError === "" &&
      scoreError === "" &&
      kilometerError === "" &&
      addressError === "" &&
      thumbnailError === "" &&
      priceError === "" &&
      cityError === "" &&
      highlight1Error === "" &&
      highlight2Error === "" &&
      highlightError3 === ""
    ) {
      setValidate(true);
    }

    if (!name) {
      setNameError("* Please fill in the hotel name.");
      setsubmitAddHotel(false);
    }

    if (name) {
      setNameError("");
      setsubmitAddHotel(true);
    }

    if (!description) {
      setDescriptionError("* Please write a description.");
      setsubmitAddHotel(false);
    }

    if (description) {
      setDescriptionError("");
      setsubmitAddHotel(true);
    }

    if (!score) {
      setScoreError("* Please fill in the hotel-score.");
      setsubmitAddHotel(false);
    }

    if (score) {
      setScoreError("");
      setsubmitAddHotel(true);
    }

    if (!kilometer) {
      setKilometerError("* Please fill in distance to city centre.");
      setsubmitAddHotel(false);
    }

    if (kilometer) {
      setKilometerError("");
      setsubmitAddHotel(true);
    }

    if (!address) {
      setAddressError("* Please fill in the hotel address.");
      setsubmitAddHotel(false);
    }

    if (address) {
      setAddressError("");
      setsubmitAddHotel(true);
    }

    var expression =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    var regex = new RegExp(expression);

    if (!thumbnail.match(regex) || !thumbnail) {
      setThumbnailError("* Please provide a valid thumbnail URL.");
      setsubmitAddHotel(false);
    }

    if (thumbnail.match(regex)) {
      setThumbnailError("");
      setsubmitAddHotel(true);
    }

    if (!price || price < 100) {
      setPriceError("* The price must be over 100");
      setsubmitAddHotel(false);
    }

    if (price > 100) {
      setPriceError("");
      setsubmitAddHotel(true);
    }

    if (!city) {
      setCityError("* Please provide a City.");
      setsubmitAddHotel(false);
    }

    if (city) {
      setCityError("");
      setsubmitAddHotel(true);
    }

    if (!highlight1) {
      setHighlight1Error("* Please fill in a feature you want to highlight.");
      setsubmitAddHotel(false);
    }

    if (highlight1) {
      setHighlight1Error("");
      setsubmitAddHotel(true);
    }

    if (!highlight2) {
      setHighlight2Error("* Please fill in a feature you want to highlight.");
      setsubmitAddHotel(false);
    }

    if (highlight2) {
      setHighlight2Error("");
      setsubmitAddHotel(true);
    }

    if (!highlight3) {
      setHighlight3Error("* Please fill in a feature you want to highlight.");
      setsubmitAddHotel(false);
    }

    if (highlight3) {
      setHighlight3Error("");
      setsubmitAddHotel(true);
    }

    const tkn = localStorage.getItem("Token");

    if (validate === true) {
      try {
        const hotel = {
          data: {
            name: name,
            description: description,
            score: score,
            km_to_city_centre: kilometer,
            address: address,
            thumbnail_url: thumbnail,
            price: price,
            spa: spa,
            balcony: balcony,
            internet: internet,
            fitness_room: fitnessRoom,
            breakfast_included: breakfast,
            bar: bar,
            city: city,
            headlight_feature_1: highlight1,
            headlight_feature_2: highlight2,
            headlight_feature_3: highlight3,
            featured: featured,
          },
        };
        fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/hotels?populate=*`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            Authorization: `Bearer ${tkn}`,

            body: JSON.stringify(hotel),
          }
        ).then(() => {
          console.log("SUCCESS");
          setsubmitAddHotel(false);
          swal({
            title: "Success!",
            text: `You added ${name} successfully.`,
            icon: "success",
            button: {
              text: "Close",
              className: "sweet-button",
            },
          }).then(function () {
            window.location.reload();
          });
        });
      } catch (error) {
        console.log("FAIL");
      } finally {
      }
    }
  };

  return (
    <>
      <Wrapper>
        <HeadingTwo content="Add a new hotel" />
        <Form>
          <Input
            id="name"
            placeholder="Name"
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="error">{nameError}</div>

          <TextArea
            id="description"
            placeholder="Description"
            type="text"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="error">{descriptionError}</div>

          <Input
            id="score"
            placeholder="Score"
            type="number"
            label="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <div className="error">{scoreError}</div>

          <Input
            id="km_to_city_centre"
            placeholder="Kilometer to city centre"
            type="number"
            label="Kilometer to city centre"
            value={kilometer}
            onChange={(e) => setKilometer(e.target.value)}
          />
          <div className="error">{kilometerError}</div>

          <Input
            id="address"
            placeholder="Address"
            type="text"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="error">{addressError}</div>

          <Input
            id="thumbnail"
            placeholder="Provide an URL for an image"
            type="text"
            label="Thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
          <div className="error">{thumbnailError}</div>

          <Input
            id="price"
            placeholder="Price"
            type="number"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="error">{priceError}</div>
          <Label>Spa:</Label>
          <Select
            id="spa"
            placeholder="Spa"
            value={spa}
            onChange={(e) => setSpa(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <Label>Balcony:</Label>
          <Select
            id="balcony"
            placeholder="Balcony"
            value={balcony}
            onChange={(e) => setBalcony(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <Label>Internet:</Label>
          <Select
            id="internet"
            placeholder="Internet"
            value={internet}
            onChange={(e) => setInternet(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <Label>Fitness room:</Label>
          <Select
            id="fitness_room"
            placeholder="Fitness room"
            value={fitnessRoom}
            onChange={(e) => setFitnessRoom(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <Label>Breakfast included:</Label>
          <Select
            id="breakfast_included"
            placeholder="Breakfast included"
            value={breakfast}
            onChange={(e) => setBreakfast(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <Label>Bar:</Label>
          <Select
            id="bar"
            placeholder="Bar"
            value={bar}
            onChange={(e) => setBar(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <Input
            id="city"
            placeholder="city"
            type="text"
            label="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="error">{cityError}</div>

          <Input
            id="highlight_1"
            placeholder="This feature will stand out"
            type="text"
            label="Highlighted feature 1"
            value={highlight1}
            onChange={(e) => setHighlight1(e.target.value)}
          />
          <div className="error">{highlight1Error}</div>

          <Input
            id="highlight_2"
            placeholder="This feature will stand out"
            type="text"
            label="Highlighted feature 2"
            value={highlight2}
            onChange={(e) => setHighlight2(e.target.value)}
          />
          <div className="error">{highlight2Error}</div>

          <Input
            id="highlight_3"
            placeholder="This feature will stand out"
            type="text"
            label="Highlighted feature 3"
            value={highlight3}
            onChange={(e) => setHighlight3(e.target.value)}
          />
          <div className="error">{highlightError3}</div>

          <Label>Featured:</Label>
          <Select
            id="featured"
            placeholder="Featured"
            value={featured}
            onChange={(e) => setFeatured(e.target.value)}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>

          <ButtonWrap>
            {" "}
            <CancelButton onClick={props.cancelClick}>Cancel</CancelButton>
            <OrderButton type="submit" onClick={handleAddHotel}>
              {submitAddHotel === false ? "Add hotel" : "Processing.."}
            </OrderButton>
          </ButtonWrap>
        </Form>
      </Wrapper>
    </>
  );
}

AddHotel.propTypes = {
  href: PropTypes.string,
  cancelClick: PropTypes.func,
  orderClick: PropTypes.func,
  formError: PropTypes.bool,
  buttonContent: PropTypes.string,

  nameValue: PropTypes.string,
  nameChange: PropTypes.func,
  nameError: PropTypes.string,

  descriptionValue: PropTypes.string,
  descriptionChange: PropTypes.func,
  descriptionError: PropTypes.string,

  scoreValue: PropTypes.number,
  scoreChange: PropTypes.func,
  scorError: PropTypes.string,

  km_to_city_centreValue: PropTypes.number,
  km_to_city_centreChange: PropTypes.func,
  km_to_city_centreError: PropTypes.string,

  addressValue: PropTypes.string,
  addressChange: PropTypes.func,
  addressError: PropTypes.string,

  priceValue: PropTypes.number,
  priceChange: PropTypes.func,
  priceError: PropTypes.string,

  thumbnailValue: PropTypes.string,
  thumbnailChange: PropTypes.func,
  thumbnailError: PropTypes.string,

  spaValue: PropTypes.bool,
  spaChange: PropTypes.func,
  spaError: PropTypes.string,

  balconyValue: PropTypes.bool,
  balconyChange: PropTypes.func,
  balconyError: PropTypes.string,

  internetValue: PropTypes.bool,
  internetChange: PropTypes.func,
  internetError: PropTypes.string,

  fitness_roomValue: PropTypes.bool,
  fitness_roomChange: PropTypes.func,
  fitness_roomError: PropTypes.string,

  breakfast_includedValue: PropTypes.bool,
  breakfast_includedChange: PropTypes.func,
  breakfast_includedError: PropTypes.string,

  barValue: PropTypes.bool,
  barChange: PropTypes.func,
  barError: PropTypes.string,

  cityValue: PropTypes.string,
  cityChange: PropTypes.func,
  cityError: PropTypes.string,

  headlight_feature_1Value: PropTypes.string,
  headlight_feature_1Change: PropTypes.func,
  headlight_feature_1Error: PropTypes.string,

  headlight_feature_2Value: PropTypes.string,
  headlight_feature_2Change: PropTypes.func,
  headlight_feature_2Error: PropTypes.string,

  headlight_feature_3Value: PropTypes.string,
  headlight_feature_3Change: PropTypes.func,
  headlight_feature_3Error: PropTypes.string,

  featuredValue: PropTypes.bool,
  featuredChange: PropTypes.func,
  featuredError: PropTypes.string,

  optionValue: PropTypes.string,
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

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #19024b;
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
