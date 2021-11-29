import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 0.8rem;
  -webkit-box-shadow: 1px 17px 15px 5px rgba(0, 0, 0, 0.08);
  box-shadow: 1px 17px 15px 5px rgba(0, 0, 0, 0.08);
  width: 60%;
  height: 8rem;
  z-index: 59;
  position: absolute;
  top: 14.5rem;
  left: 22%;
  right: 50%;
`;

const Heading = styled.text`
  margin-top: 2rem;
  margin-left: -3rem;
  font-size: 0.8rem;
  color: #969696;
  font-weight: 700;
`;
const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Hr = styled.hr`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
  border: 1px solid #969696;
  opacity: 0.2;
  height: 35%;
`;
const Details = () => {
  return (
    <Wrapper>
      <Card>
        <Heading>IP ADDRESS</Heading>
      </Card>
      <Hr />
      <Card>
        <Heading>LOCATION</Heading>
      </Card>
      <Hr />
      <Card>
        <Heading>TIMEZONE</Heading>
      </Card>
      <Hr />
      <Card>
        <Heading>ISP</Heading>
      </Card>
    </Wrapper>
  );
};

export default Details;
