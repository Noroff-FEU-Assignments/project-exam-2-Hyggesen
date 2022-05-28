import Navbar from "../components/common/Navbar";
import Heading from "../components/common/Heading";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import Button from "../components/common/Button";
import HeadingTwo from "../components/common/HeadingTwo";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Paragraph from "../components/common/Paragraph";
import AuthContext from "../context/AuthContext";
import Modal from "react-modal";
import React from "react";
import AddHotel from "../components/common/addHotel";
import { Helmet } from "react-helmet";
import DeleteItem from "../components/common/DeleteItem";

Modal.setAppElement("#root");

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [messages, setMessages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);

    document.body.style.overflow = null;
  }

  useEffect(() => {
    if (!auth) {
      navigate("/sign-in", { replace: true });
      localStorage.clear();
    }
  }, [auth, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/orders/?populate=*`
        );

        const json = await result.json();

        setBookings(json.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/contact-forms?populate=*`
        );

        const json = await result.json();

        setMessages(json.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://noroff-project-exam-ben.herokuapp.com/api/hotels?populate=*"
        );

        const json = await result.json();

        setHotel(json.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const allMessages = messages
    ? messages.map((item) => (
        <tr key={item.id ? item.id : "-"}>
          <Td>{item.attributes.name ? item.attributes.name : "-"}</Td>
          <Td>{item.attributes.email ? item.attributes.email : "-"}</Td>
          <Td>{item.attributes.subject ? item.attributes.subject : "-"}</Td>
          <Td>
            {" "}
            <FlexIt>
              {item.attributes.message ? item.attributes.message : "-"}{" "}
              <FlexHorizontal>
                <DeleteItem
                  url={
                    "https://noroff-project-exam-ben.herokuapp.com/api/contact-forms/" +
                    item.id
                  }
                  deleteWhat="message"
                />
              </FlexHorizontal>
            </FlexIt>
          </Td>
        </tr>
      ))
    : "";

  const allBookings = bookings
    ? bookings.map((item) => (
        <tr key={item.id ? item.id : "-"}>
          <Td>
            {item.attributes.hotels.data[0].attributes.name
              ? item.attributes.hotels.data[0].attributes.name
              : ""}
          </Td>
          <Td> {item.attributes.email ? item.attributes.email : "-"}</Td>
          <Td> {item.attributes.name ? item.attributes.name : "-"}</Td>
          <TdIn>
            {" "}
            {item.attributes.fromDate ? item.attributes.fromDate : "-"}
          </TdIn>
          <TdOut>
            {" "}
            {item.attributes.toDate ? item.attributes.toDate : "-"}
          </TdOut>
          <Td> {item.attributes.guests ? item.attributes.guests : "-"}</Td>
        </tr>
      ))
    : "";

  const allHotels = hotel
    ? hotel.map((item) => (
        <HotelLink href={"/hotels/" + item.id} key={item.id ? item.id : "-"}>
          {item.attributes.name ? item.attributes.name : "-"}
        </HotelLink>
      ))
    : "";

  return (
    <>
      <Helmet>
        <title>Admin panel</title>
        <meta
          name="description"
          content="Your admiistration panel for Holidaze. "
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <Container className="container">
        <Modal
          style={{
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
          }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <AddHotel cancelClick={closeModal} />
        </Modal>
        <FlexBetween>
          <Heading content="Admin panel" />
          <Button content="Add hotel" color="#F72585" click={openModal} />
        </FlexBetween>
        <SectionWrapper>
          <HeadingTwo content="Bookings" />
          <BookingList>
            <BookingTable>
              <tbody>
                <tr>
                  <ThLeft>Hotel name</ThLeft>
                  <Th>Email</Th>
                  <Th>Name</Th>
                  <Th>Check-in</Th>
                  <Th>Check-out</Th>
                  <ThRight>Guests</ThRight>
                </tr>
                {allBookings.length ? (
                  allBookings.reverse()
                ) : (
                  <tr>
                    <th>
                      {" "}
                      <Paragraph content="We couldn't find any bookings.." />
                    </th>
                  </tr>
                )}
              </tbody>
            </BookingTable>
          </BookingList>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingTwo content="Messages" />
          <MessageList>
            <MessageTable>
              <tbody>
                <tr>
                  <ThLeft>Name</ThLeft>
                  <Th>Email</Th>
                  <Th>Subject</Th>

                  <ThRight>Message</ThRight>
                </tr>
                {allMessages.length ? (
                  allMessages.reverse()
                ) : (
                  <tr>
                    <th>
                      {" "}
                      <Paragraph content="We couldn't find any messages.." />
                    </th>
                  </tr>
                )}
              </tbody>
            </MessageTable>
          </MessageList>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingTwo content="Hotels" />

          <HotelList>
            {allHotels.length ? (
              allHotels
            ) : (
              <Paragraph content="We couldn't find any hotels.." />
            )}
          </HotelList>
        </SectionWrapper>
      </Container>

      <Footer />
    </>
  );
}

export default Admin;

const FlexBetween = styled.div`
  margin-top: 50px;
  padding: 0px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 120px;
    align-items: center;
    justify-content: space-between;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const BookingList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HotelList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 50px;
`;

const HotelLink = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: #19024b;
  margin: 10px 0px;
  &:hover {
    cursor: pointer;
    color: #f72585;
  }
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  margin: auto;
`;

const BookingTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border-radius: 8px;

  @media (max-width: 1200px) {
    td:nth-of-type(1):before {
      content: "Hotel name: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(2):before {
      content: "Email: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(3):before {
      content: "Name: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(4):before {
      content: "Check-in: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(5):before {
      content: "Check-out: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(6):before {
      content: "Guests: ";
      font-weight: 600;
      margin-right: 10px;
    }
  }
`;

const MessageTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border-radius: 8px;

  @media (max-width: 1200px) {
    td:nth-of-type(1):before {
      content: "Name: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(2):before {
      content: "Email: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(3):before {
      content: "Subject: ";
      font-weight: 600;
      margin-right: 10px;
    }
    td:nth-of-type(4):before {
      content: "Message: ";
      font-weight: 600;
      margin-right: 10px;
    }
  }
`;

const Th = styled.th`
  background-color: #19024b;
  border: solid 1px #ddeeee;
  color: white;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: left;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Td = styled.td`
  border: solid 1px #ddeeee;
  color: #19024b;
  font-size: 18px;
  padding: 10px;
`;

const TdIn = styled.td`
  border: solid 1px #ddeeee;
  background-color: #96ecd3;
  color: #19024b;
  font-size: 20px;
  padding: 10px;
`;

const TdOut = styled.td`
  border: solid 1px #ddeeee;
  background-color: #ffd0d2;
  color: #19024b;
  font-size: 20px;
  padding: 10px;
`;
const ThLeft = styled.th`
  border-radius: 8px 0px 0px 0px;
  background-color: #19024b;
  border: solid 1px #ddeeee;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ThRight = styled.th`
  border-radius: 0px 8px 0px 0px;
  background-color: #19024b;
  border: solid 1px #ddeeee;
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const FlexIt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
`;

const FlexHorizontal = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: flex-end;
`;
