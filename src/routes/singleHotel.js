import Navbar from "../components/common/Navbar";
import Heading from "../components/common/Heading";
import skeleton from "../assets/common/skeleton_image.png";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import checkIcon from "../assets/common/checkIcon.png";
import HeadingTwo from "../components/common/HeadingTwo";
import Paragraph from "../components/common/Paragraph";
import Review from "../components/common/Review";
import BigButton from "../components/common/BigButton";
import Modal from "react-modal";
import React from "react";
import check from "../assets/common/checkfacility.png";
import cross from "../assets/common/nofacility.png";
import Order from "../components/common/Order";
import BreadCrumb from "../components/common/BreadCrumb";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import { Helmet } from "react-helmet";
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import moment from "moment";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    background: "#fff",
    maxWidth: "800px",
    width: "100%",
    height: "70vh",
    padding: "100px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    overflowX: "hidden",
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

function SingleHotel() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [bar, setBar] = useState([]);
  const [internet, setInternet] = useState();
  const [spa, setSpa] = useState([]);
  const [balcony, setBalcony] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [fitnessRoom, setFitnessRoom] = useState([]);
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/hotels/${id}?populate=*`
        );

        const json = await result.json();

        setHotel(json.data.attributes);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [id]);

  function checkFacilities() {
    setTimeout(function () {
      if (hotel.bar && hotel.bar === true) {
        setBar(`${check}`);
      } else {
        setBar(`${cross}`);
      }

      if (hotel.internet && hotel.internet === true) {
        setInternet(`${check}`);
      } else {
        setInternet(`${cross}`);
      }

      if (hotel.spa && hotel.spa === true) {
        setSpa(`${check}`);
      } else {
        setSpa(`${cross}`);
      }

      if (hotel.balcony && hotel.balcony === true) {
        setBalcony(`${check}`);
      } else {
        setBalcony(`${cross}`);
      }

      if (hotel.breakfast_included && hotel.breakfast_included === true) {
        setBreakfast(`${check}`);
      } else {
        setBreakfast(`${cross}`);
      }

      if (hotel.fitness_room && hotel.fitness_room === true) {
        setFitnessRoom(`${check}`);
      } else {
        setFitnessRoom(`${cross}`);
      }

      if (hotel.internet && hotel.internet === true) {
        setInternet(`${check}`);
      } else {
        setInternet(`${cross}`);
      }
    }, 200);
  }

  checkFacilities();

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);

    document.body.style.overflow = null;
  }

  if (!hotel) {
    return <div>Loading...</div>;
  }

  function onSubmit(data) {
    const review = {
      data: {
        name: data.name,
        comment: data.comment,
        hotels: id,
      },
    };

    try {
      setSubmittingReview(true);
      /* eslint-disable no-unused-vars */
      const response = axios.post(
        "https://noroff-project-exam-ben.herokuapp.com/api/reviews/?populate=*",
        review
      );
      /* eslint-disable no-unused-vars */
    } catch (error) {
      console.log(error);
    } finally {
      setSubmittingReview(false);

      swal({
        title: "Published!",
        text: `Thanks for your feedback ${data.name}. Your review is now published.`,
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

  const url =
    (hotel && hotel.thumbnail && hotel.thumbnail_url === null) ||
    hotel.thumbnail_url === ""
      ? hotel.thumbnail.data.attributes.url
      : hotel.thumbnail_url
      ? hotel.thumbnail_url
      : skeleton;

  return (
    <>
      <Helmet>
        <title>{hotel.name ? hotel.name : "Holidaze hotel"}</title>
        <meta
          name="description"
          content={hotel.description ? hotel.description : "-"}
        />
      </Helmet>
      <Navbar />
      {hotel.name ? (
        <>
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <Order
              hotelName={hotel.name ? hotel.name : "-"}
              click={closeModal}
              cancelClick={closeModal}
              id={id}
            />
          </Modal>

          <div className="container">
            <HotelWrapper>
              <BreadCrumb content={hotel.name ? hotel.name : "-"} />
              <CoverImage src={url} alt={hotel.name ? hotel.name : "-"} />
              <FlexDiv>
                <Heading content={hotel.name ? hotel.name : "-"} />
                <Score>
                  <ScoreP>Score: {hotel.score}/10</ScoreP>
                </Score>
              </FlexDiv>
              <TopFeatures>
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>
                    {hotel.headlight_feature_1
                      ? hotel.headlight_feature_1
                      : "-"}
                  </TopFeatureText>
                </TopFeature>
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>
                    {" "}
                    {hotel.headlight_feature_2
                      ? hotel.headlight_feature_2
                      : "-"}
                  </TopFeatureText>
                </TopFeature>
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>
                    {" "}
                    {hotel.headlight_feature_3
                      ? hotel.headlight_feature_3
                      : "-"}
                  </TopFeatureText>
                </TopFeature>
              </TopFeatures>
              <FlexDiv>
                <Price>{hotel.price},- /night</Price>
                <OrderNow onClick={openModal}>Order now</OrderNow>
              </FlexDiv>
              <PartSection>
                <HeadingTwo content="Hotel Description" />
                <Paragraph
                  content={hotel.description ? hotel.description : "-"}
                />
              </PartSection>
              <PartSection>
                <HeadingTwo content="Facilities" />
                <Ul>
                  <li>
                    <TopFeature>
                      <Check src={hotel ? balcony : "-"} />
                      <TopFeatureText>Balcony</TopFeatureText>
                    </TopFeature>
                    <TopFeature>
                      <Check src={hotel ? bar : "-"} />
                      <TopFeatureText>Bar</TopFeatureText>
                    </TopFeature>
                    <TopFeature>
                      <Check src={hotel ? breakfast : "-"} />
                      <TopFeatureText>Breakfast included</TopFeatureText>
                    </TopFeature>
                    <TopFeature>
                      <Check src={hotel ? fitnessRoom : "-"} />
                      <TopFeatureText>Fitness room</TopFeatureText>
                    </TopFeature>
                    <TopFeature>
                      <Check src={hotel ? internet : "-"} />
                      <TopFeatureText>Internet</TopFeatureText>
                    </TopFeature>
                    <TopFeature>
                      <Check src={spa} />
                      <TopFeatureText>Spa</TopFeatureText>
                    </TopFeature>
                  </li>
                </Ul>
              </PartSection>
              <PartSection>
                <HeadingTwo content="Reviews" />

                {hotel.reviews && hotel.reviews.data[0] ? (
                  hotel.reviews.data.map((item) => (
                    <Review
                      key={item.id ? item.id : "-"}
                      name={item.attributes.name ? item.attributes.name : "-"}
                      review={
                        item.attributes.comment ? item.attributes.comment : "-"
                      }
                      date={
                        item.attributes.createdAt
                          ? moment(item.attributes.createdAt).format(
                              "MMM Do YY"
                            )
                          : "-"
                      }
                    />
                  ))
                ) : (
                  <Paragraph content="No reviews yet.." />
                )}
                <LeaveReview>
                  {hotel.reviews && hotel.reviews.data[0]
                    ? "Would you like to leave a review?"
                    : "Would you like to be the first to leave a review?"}
                </LeaveReview>
                <Form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
                  <Label labelFor="name">Name</Label>
                  <TheInput
                    id="name"
                    placeholder="Full name"
                    type="text"
                    label="Full name"
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
                  <Label labelFor="comment">Comment</Label>
                  <TheTextArea
                    id="comment"
                    placeholder="Comment"
                    label="Comment"
                    {...register("comment", {
                      required: "This field is required.",
                      minLength: {
                        value: 20,
                        message: "Your comment must be over 20 characters",
                      },
                      maxLength: {
                        value: 200,
                        message: "Your comment can not be over 200 characters",
                      },
                    })}
                    name="comment"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="comment"
                    render={({ message }) => <p className="error">{message}</p>}
                  />

                  <BigButton
                    content={!submittingReview ? "Publish" : "Processing.."}
                    color="#F72585"
                  />
                </Form>
              </PartSection>
            </HotelWrapper>
          </div>

          <Footer />
        </>
      ) : (
        <>
          <div className="container">
            <Loader />
          </div>
        </>
      )}
    </>
  );
}

export default SingleHotel;

const TheInput = styled.input`
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

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #19024b;
  margin-top: 10px;
  align-items: left !important;
  width: 100%;
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const TheTextArea = styled.textarea`
  border-radius: 8px;
  margin-bottom: 10px;
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

const CoverImage = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    height: 220px;
  }
`;

const HotelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Score = styled.div`
  background-color: #96ecd3;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media (max-width: 768px) {
    max-width: 150px;
    margin: 15px 0px;
  }
`;

const ScoreP = styled.p`
  font-size: 20px;
  margin: 0px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const TopFeatures = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TopFeature = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Check = styled.img`
  object-fit: contain;
  margin-right: 10px;
`;

const TopFeatureText = styled.p`
  color: #9aa4aa;
  font-size: 18px;
`;

const Price = styled.p`
  font-weight: 700;
  color: #f72585;
  font-size: 25px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const OrderNow = styled.div`
  height: 55px;
  width: 230px;
  background-color: #4361ee;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    background-color: #5c77f8;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
`;

const PartSection = styled.div`
  padding: 30px 0px;
`;

const LeaveReview = styled.p`
  font-size: 25px;
  color: #19024b;
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
