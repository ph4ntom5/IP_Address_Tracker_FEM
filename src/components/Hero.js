import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import pattern from "../images/pattern-bg.png";
import arrowicon from "../images/icon-arrow.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${pattern});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 2rem;
  margin: 0;
`;

const Form = styled.section`
  position: relative;
  height: 100px;
  width: 45rem;
  margin: 0 auto;
  margin-top: 2rem;
`;

const IPinput = styled.input`
  width: 60%;
  height: 4em;
  background-color: white;
  border: none;
  cursor: pointer;
  padding-right: 6rem;
  border-radius: 0.8rem;
  &:focus {
    outline: none;
  }
  ::placeholder {
    padding-left: 1rem;
    color: gray;
    font-size: 1rem;
  }
`;

const IPButton = styled.button`
  background: black;
  height: 4.1em;
  width: 3.8rem;
  border: none;
  background-image: url(${arrowicon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  cursor: pointer;
  border-radius: 0 0.8rem 0.8rem 0;
  right: 5rem;
  top: 0;
  bottom: 0;
  &
`;

const Hero = ({ isp }) => {
  const [localIP, setlocalIP] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setlocalIP(data));
  }, []);

  return (
    <>
      <Wrapper>
        <Title>IP Address Tracker</Title>
        <Form>
          <IPinput
            placeholder="Search for any IP address or domain"
            onChange={Hero}
          >
            {localIP.isp}
          </IPinput>
          <IPButton></IPButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default Hero;
