import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import ShapeButton from 'components/shape-trans';
import { Link } from 'react-router-dom';
import paymentBg from 'images/payment.png';
import progress from 'images/progress.png';

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

const Back = styled.div`
  position: absolute;
  margin: 20px 9px;
`;

const TextContainer = styled.div`
  margin-top: 360px;
  width: 320px;
  height: 154px;
  background-color: white;
  padding: 0 20px 0 20px;
  position: absolute;
  z-index: 2;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const LineDivider = styled.div`
  left: 36px;
  right: 36px;
  width: 100%;
  border: 1px solid #e0e0e0;
  margin: 9px 0;
`;

const Percent = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #00b14f;
  margin: 5px 0;
  text-align: right;
`;

const Bold = styled.span`
  font-weight: bold;
  color: black;
`;

export default function Page() {
  return (
    <>
      <ScreenContainer>
        <TextContainer>
          <Title>Spending limit for business</Title>
          <p>Rp1.000.000 per month</p>
          <Percent>Rp600.000</Percent>
          <img src={progress} alt='progress'></img>
          <LineDivider />
          <p>
            You have reached <Bold>60%</Bold> of your monthly spending limit
          </p>
        </TextContainer>
        <Link to='/booking'>
          <Back>
            <ShapeButton />
          </Back>
        </Link>
        <Screen src={paymentBg} alt='paymentBg'></Screen>
      </ScreenContainer>
      <Test>
        Payment
        <br />
        <Link to='/booking'>
          <Button buttonText='Go to booking' />
        </Link>
      </Test>
    </>
  );
}
