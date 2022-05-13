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
import Loader from "../components/common/Loader";

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
    borderRadius: "8px",
    overflowX: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

function Admin() {
  const [enquries, setEnquries] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [messages, setMessages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [enqLoading, setEnqLoading] = useState(true);
  const [msgLoading, setMsgLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!auth) {
      navigate("/sign-in", { replace: true });
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setEnqLoading(true);
        const result = await fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/orders/?populate=*`
        );

        const json = await result.json();

        setEnquries(json.data);
        setEnqLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMsgLoading(true);
        const result = await fetch(
          `http://localhost:1337/api/contact-forms?populate=*`
        );

        const json = await result.json();

        setMessages(json.data);
        setMsgLoading(false);
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
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <AddHotel />
        </Modal>
        <FlexBetween>
          <Heading content="Admin panel" />
          <Button content="Add hotel" color="#F72585" click={openModal} />
        </FlexBetween>
        <SectionWrapper>
          <HeadingTwo content="Enquries" />
          <EnquiryList>
            <EnquriesTable>
              <tr>
                <ThLeft>Hotel name</ThLeft>
                <Th>Email</Th>
                <Th>Name</Th>
                <Th>Check-in</Th>
                <Th>Check-out</Th>
                <ThRight>Guests</ThRight>
              </tr>
              {enquries ? (
                enquries.map((item) => (
                  <tr key={item.id ? item.id : "-"}>
                    <Td>
                      {item.attributes.hotels.data[0].attributes.name
                        ? item.attributes.hotels.data[0].attributes.name
                        : ""}
                    </Td>
                    <Td>
                      {" "}
                      {item.attributes.email ? item.attributes.email : "-"}
                    </Td>
                    <Td>
                      {" "}
                      {item.attributes.name ? item.attributes.name : "-"}
                    </Td>
                    <TdIn>
                      {" "}
                      {item.attributes.fromDate
                        ? item.attributes.fromDate
                        : "-"}
                    </TdIn>
                    <TdOut>
                      {" "}
                      {item.attributes.toDate ? item.attributes.toDate : "-"}
                    </TdOut>
                    <Td>
                      {" "}
                      {item.attributes.guests ? item.attributes.guests : "-"}
                    </Td>
                  </tr>
                ))
              ) : (
                <>
                  <Paragraph content="No enquries yet.." />
                </>
              )}
            </EnquriesTable>
            {enqLoading ? <Paragraph content="No enquries yet.." /> : ""}
          </EnquiryList>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingTwo content="Messages" />
          <MessageList>
            <MessageTable>
              <tr>
                <ThLeft>Name</ThLeft>
                <Th>Email</Th>
                <Th>Subject</Th>

                <ThRight>Message</ThRight>
              </tr>
              {messages ? (
                messages.map((item) => (
                  <tr key={item.id ? item.id : "-"}>
                    <Td>{item.attributes.name ? item.attributes.name : "-"}</Td>
                    <Td>
                      {item.attributes.email ? item.attributes.email : "-"}
                    </Td>
                    <Td>
                      {item.attributes.subject ? item.attributes.subject : "-"}
                    </Td>
                    <Td>
                      {item.attributes.message ? item.attributes.message : "-"}
                    </Td>
                  </tr>
                ))
              ) : (
                <Paragraph content="No messages yet.." />
              )}{" "}
            </MessageTable>
            {msgLoading ? <Paragraph content="No messages yet.." /> : ""}
          </MessageList>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingTwo content="Hotels" />

          <HotelList>
            {hotel ? (
              hotel.map((item) => (
                <HotelLink
                  href={"/singlehotel/" + item.id}
                  key={item.id ? item.id : "-"}
                >
                  {item.attributes.name ? item.attributes.name : "-"}
                </HotelLink>
              ))
            ) : (
              <Paragraph content="No reviews yet.." />
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

const EnquiryList = styled.div`
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
  overflow-x: scroll;
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

const EnquriesTable = styled.table`
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