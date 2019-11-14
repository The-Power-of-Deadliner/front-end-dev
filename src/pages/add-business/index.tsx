import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import arrow from 'images/right-arrow-icon.png';
import addBusinessBg from 'images/add-business.png';

const Test = styled.div`
  text-align: center;
`;

const Screen = styled.img`
  width: 360px;
  height: 640px;
  display: block;
  margin: auto;
`;

const ScreenContainer = styled.div`
  width: 360px;
  height: 640px;
  display: block;
  margin: auto;
`;

const LineDivider = styled.div`
  left: 4%;
  right: 4%;
  width: 100%;
  border: 1px solid #e0e0e0;
  margin: 1vh 0;
`;

const TextContainer = styled.div`
  margin: 10vh 3vh;
  position: absolute;
  z-index: 2;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.6vh;
  color: #00afd3;
  margin-top: 3vh;
  margin-bottom: 0.5vh;
`;

const Arrow = styled.img`
  width: 2vh;
  height: auto;
  margin: 18.5vh 34vh;
  position: absolute;
  z-index: 2;
`;

export default function Page() {
  return (
    <>
      <ScreenContainer>
        <TextContainer>
          <p>We find out that you don’t have any business profile yet</p>
          <LineDivider />
          <Title>Add a business profile</Title>
          <p>Better manage your ride expenses and</p>
          <p>activities integrated with your company</p>
        </TextContainer>
        <Link to='/email'>
          <Arrow src={arrow} alt='arrow' />
        </Link>
        <Screen src={addBusinessBg} alt='addBusinessBg'></Screen>
      </ScreenContainer>
      <Test>
        Add business
        <br />
        <Link to='/email'>
          <Button buttonText='Go to email' />
        </Link>
      </Test>
    </>
  );
}
