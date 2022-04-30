import Navbar from "../components/common/Navbar";
import Heading from "../components/common/Heading";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import Button from "../components/common/Button";
import HeadingTwo from "../components/common/HeadingTwo";
import { useEffect, useState } from "react";
import Paragraph from "../components/common/Paragraph";

function Admin() {
  const [enquries, setEnquries] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/orders/?populate=*`
        );

        const json = await result.json();

        setEnquries(json.data);
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
          `http://localhost:1337/api/contact-forms?populate=*`
        );

        const json = await result.json();

        setMessages(json.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  useEffect(async () => {
    fetch("https://noroff-project-exam-ben.herokuapp.com/api/hotels?populate=*")
      .then((response) => response.json())

      .then((data) => setHotel(data.data));
  }, []);

  console.log(messages);
  return (
    <>
      <Navbar />
      <div className="container">
        <FlexBetween>
          <Heading content="Admin panel" />
          <Button content="Add hotel" color="#4361EE" />
        </FlexBetween>
        <SectionWrapper>
          <HeadingTwo content="Enquries" />
          <EnquiryList>
            {enquries ? (
              enquries.map((item) => (
                <Enquiry>
                  <HotelNameLabel>
                    {item.attributes.hotels.data[0].attributes.name
                      ? item.attributes.hotels.data[0].attributes.name
                      : "-"}
                  </HotelNameLabel>
                  <EnquiryInfo>
                    <InfoLabel>Email:</InfoLabel>
                    <Purple>
                      {item.attributes.email ? item.attributes.email : "-"}
                    </Purple>
                  </EnquiryInfo>
                  <EnquiryInfo>
                    <InfoLabel>Name:</InfoLabel>
                    <Purple>
                      {item.attributes.name ? item.attributes.name : "-"}
                    </Purple>
                  </EnquiryInfo>
                  <EnquiryInfo>
                    <InfoLabel>Check-in:</InfoLabel>
                    <Purple>
                      {item.attributes.fromDate
                        ? item.attributes.fromDate
                        : "-"}
                    </Purple>
                  </EnquiryInfo>
                  <EnquiryInfo>
                    <InfoLabel>Check-out:</InfoLabel>
                    <Purple>
                      {item.attributes.toDate ? item.attributes.toDate : "-"}
                    </Purple>
                  </EnquiryInfo>
                  <EnquiryInfo>
                    <InfoLabel>Guests:</InfoLabel>
                    <Purple>
                      {item.attributes.guests ? item.attributes.guests : "-"}
                    </Purple>
                  </EnquiryInfo>
                </Enquiry>
              ))
            ) : (
              <Paragraph content="No enquries yet.." />
            )}
          </EnquiryList>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingTwo content="Messages" />
          <MessageList>
            {messages ? (
              messages.map((item) => (
                <Message>
                  <FromField>
                    <NameWrapper>
                      <FixedSizeInfoLabel>Name:</FixedSizeInfoLabel>
                      <Name>
                        {item.attributes.name ? item.attributes.name : "-"}
                      </Name>
                    </NameWrapper>

                    <Purple>
                      {" "}
                      {item.attributes.email ? item.attributes.email : "-"}
                    </Purple>
                  </FromField>
                  <SubjectField>
                    <FixedSizeInfoLabel>Subject:</FixedSizeInfoLabel>
                    <Content>
                      {" "}
                      {item.attributes.subject ? item.attributes.subject : "-"}
                    </Content>
                  </SubjectField>
                  <MessageField>
                    <FixedSizeInfoLabel>Message:</FixedSizeInfoLabel>
                    <Content>
                      {" "}
                      {item.attributes.message ? item.attributes.message : "-"}
                    </Content>
                  </MessageField>
                </Message>
              ))
            ) : (
              <Paragraph content="No messages yet.." />
            )}
          </MessageList>
        </SectionWrapper>
        <SectionWrapper>
          <HeadingTwo content="Hotels" />

          <HotelList>
            {hotel ? (
              hotel.map((item) => (
                <HotelLink href={"/singlehotel/" + item.id}>
                  {item.attributes.name}
                </HotelLink>
              ))
            ) : (
              <Paragraph content="No reviews yet.." />
            )}
          </HotelList>
        </SectionWrapper>
      </div>

      <Footer />
    </>
  );
}

export default Admin;

const FlexBetween = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const EnquiryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HotelList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const HotelLink = styled.a`
  font-size: 16px;
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

const Enquiry = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: #fdfcff;
  display: flex;
  border-radius: 8px;
  margin: 15px 0px;
  justify-content: space-between;
`;

const HotelNameLabel = styled.p`
  background-color: #19024b;
  color: white;
  padding: 5px 15px;
  font-size: 14px;
  border-radius: 50px;
`;

const EnquiryInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #19024b;
  margin-right: 10px;
`;

const FixedSizeInfoLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #19024b;
  margin-right: 10px;
  width: 100px;
`;

const Purple = styled.p`
  color: #f72585;
  font-size: 16px;
  font-weight: 600;
`;

const Message = styled.div`
  background-color: #fdfcff;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 0px;
`;

const FromField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const SubjectField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: top;
  width: 100%;
`;
const MessageField = styled.div`
  display: flex;
  vertical-align: top;
  width: 100%;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #19024b;
  max-width: 600px;
  width: 100%;
  line-height: 150%;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #19024b;
  line-height: 150%;
`;
