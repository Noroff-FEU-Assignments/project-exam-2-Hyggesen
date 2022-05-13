import Navbar from "../components/common/Navbar";
import Heading from "../components/common/Heading";
import skeleton from "../assets/brand/skeleton_image.png";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import checkIcon from "../assets/brand/checkIcon.png";
import HeadingTwo from "../components/common/HeadingTwo";
import Paragraph from "../components/common/Paragraph";
import Review from "../components/common/Review";
import Input from "../components/common/Input";
import TextArea from "../components/common/Textarea";
import BigButton from "../components/common/BigButton";
import Modal from "react-modal";
import React from "react";
import check from "../assets/brand/checkfacility.png";
import cross from "../assets/brand/nofacility.png";
import Enquiry from "../components/common/Enquiry";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/common/BreadCrumb";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import { Helmet } from "react-helmet";
import swal from "sweetalert";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "100px",
    borderRadius: "8px",
    overflowX: "hidden",
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

function SingleHotel() {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [bar, setBar] = useState([]);
  const [internet, setInternet] = useState();
  const [spa, setSpa] = useState([]);
  const [balcony, setBalcony] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [fitnessRoom, setFitnessRoom] = useState([]);
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [comment, setComment] = useState();
  const [commentError, setCommentError] = useState();
  const [reviewError, setReviewError] = useState();
  const [orderName, setOrderName] = useState();
  const [orderEmail, setOrderEmail] = useState("");
  const [orderToDate, setOrderToDate] = useState();
  const [orderFromDate, setOrderFromDate] = useState();
  const [orderGuests, setOrderGuests] = useState();
  const [orderFromDateError, setOrderFromDateError] = useState();
  const [orderToDateError, setOrderToDateError] = useState();
  const [orderEmailError, setOrderEmailError] = useState("");
  const [orderGuestsError, setOrderGuestsError] = useState();
  const [orderFormError, setOrderFormError] = useState();
  const [orderNameError, setOrderNameError] = useState();
  const [submittingReview, setSubmittingReview] = useState(false);
  const [submittingOrder, setSubmittingOrder] = useState(false);

  const navigate = useNavigate();
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
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handleOrder = (e) => {
    setSubmittingOrder(true);
    e.preventDefault();

    if (!orderName) {
      setOrderNameError("* Please fill in your full name.");
      setOrderFormError(true);
    }

    if (orderName) {
      setOrderNameError([]);
      setOrderFormError(false);
    }

    if (!orderFromDate) {
      setOrderFromDateError("* Please provide a check-in date.");
      setOrderFormError(true);
    }
    if (orderFromDate) {
      setOrderFromDateError([]);
      setOrderFormError(false);
    }

    if (!orderToDate) {
      setOrderToDateError("* Please provide a check-out date.");
      setOrderFormError(true);
    }

    if (orderToDate) {
      setOrderToDateError([]);
      setOrderFormError(false);
    }

    if (!orderGuests || orderGuests < 1) {
      setOrderGuestsError("* Please tell us how many guests are visiting.");
      setOrderFormError(true);
    }

    if (orderGuests || orderGuests > 1) {
      setOrderGuestsError([]);
      setOrderFormError(false);
    }

    var expression =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi;
    var regex = new RegExp(expression);

    if (!orderEmail || !orderEmail.match(regex)) {
      setOrderEmailError("* You must enter a valid e-mail address.");
      setReviewError(true);
    }

    if (orderEmail.match(regex)) {
      setOrderEmailError("");
      setReviewError(false);
    }

    if (orderFormError === false) {
      try {
        const order = {
          data: {
            toDate: orderToDate,
            fromDate: orderFromDate,
            name: orderName,
            email: orderEmail,
            guests: orderGuests,
            hotels: id,
          },
        };
        fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/orders/?populate=*`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
          }
        ).then(() => {
          swal({
            title: "Success!",
            text: `Thanks ${orderName} for booking a room at ${
              hotel.name ? hotel.name : "-"
            }. We are awaiting ${orderGuests} guests from ${orderToDate} to ${orderFromDate} `,
            icon: "success",
            button: {
              text: "Close",
              className: "sweet-button",
            },
          });
        });
      } catch (error) {
      } finally {
        setSubmittingOrder(false);
      }
    }
  };

  const handleReview = (e) => {
    e.preventDefault();
    setSubmittingReview(true);

    if (name.length < 3) {
      setNameError("The name must be more than 3 characters.");
      setReviewError(true);
    }

    if (name.length > 3) {
      setNameError([]);
      setReviewError(false);
    }

    if (comment.length < 10) {
      setCommentError("The comment can't be less than 10 characters.");
      setReviewError(true);
    }

    if (comment.length > 10) {
      setCommentError([]);
      setReviewError(false);
    }

    if (reviewError === false) {
      const review = {
        data: {
          name: name,
          comment: comment,
          hotels: id,
        },
      };

      fetch(
        `https://noroff-project-exam-ben.herokuapp.com/api/reviews/?populate=*`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(review),
        }
      ).then(() => {
        setSubmittingOrder(false);

        swal({
          title: "Published!",
          text: `Thanks for your feedback ${name}. Your review is now published.`,
          icon: "success",
          button: {
            text: "Close",
            className: "sweet-button",
          },
        });
      });
    }
  };
  console.log(hotel);
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
            <Enquiry
              hotelName={hotel.name ? hotel.name : "-"}
              click={closeModal}
              cancelClick={closeModal}
              orderClick={handleOrder}
              nameValue={orderName}
              toDateValue={orderToDate}
              fromDateValue={orderFromDate}
              emailValue={orderEmail}
              guestsValue={orderGuests}
              nameChange={(e) => setOrderName(e.target.value)}
              toDateChange={(e) => setOrderToDate(e.target.value)}
              fromDateChange={(e) => setOrderFromDate(e.target.value)}
              emailChange={(e) => setOrderEmail(e.target.value)}
              guestsChange={(e) => setOrderGuests(e.target.value)}
              orderFromDateError={orderFromDateError}
              orderFormError={orderFormError}
              orderToDateError={orderToDateError}
              orderNameError={orderNameError}
              orderEmailError={orderEmailError}
              orderGuestsError={orderGuestsError}
              buttonContent={!submittingOrder ? "Place order" : "Processing.."}
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
                      key={hotel.id ? hotel.id : "-"}
                      name={item.attributes.name ? item.attributes.name : "-"}
                      review={
                        item.attributes.comment ? item.attributes.comment : "-"
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
                <Form onSubmit={handleReview} autocomplete="off">
                  <Input
                    id="name"
                    placeholder="Full name"
                    type="text"
                    label="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="error">{nameError}</div>
                  <TextArea
                    id="comment"
                    placeholder="Comment"
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="error">{commentError}</div>
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
