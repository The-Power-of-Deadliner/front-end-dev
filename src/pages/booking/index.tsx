import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import ShapeButton from 'components/shape-trans';
import { Link } from 'react-router-dom';
import bookingBg from 'images/booking.png';

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

const Payment = styled.div`
  position: absolute;
  margin: 522px 9px;
`;

const Loading = styled.div`
  position: absolute;
  margin: 575px 155px;
`;

const CardContainer = styled.div`
  position: absolute;
  width: 333px;
  height: 241px;
  left: 14px;
  top: 200px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  padding: 40px 0;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`;
const PrimaryButton = styled.button`
  background: #00b14d;
  color: white;
  width: 143.6px;
  height: 43px;
  font-size: 16px;
  padding: 0.25em 1em;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 4px;
`;
const SecondaryButton = styled.button`
  background: white;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 143.6px;
  height: 43px;
  font-size: 16px;
  padding: 0.25em 1em;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 4px;
  margin-left: 18px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 362px;
  height: 640px;
  left: -2px;
  top: 0px;
  /* Overlay */
  background: linear-gradient(
    180deg,
    rgba(55, 59, 70, 0.4) 0%,
    rgba(55, 59, 70, 0.4) 100%
  );
`;

const ModalContainer = styled.div`
  position: absolute;
  font-family: 'Open Sans', sans-serif;
  z-index: 3;
`;

export default function Page() {
  return (
    <>
      <ScreenContainer>
        <ModalContainer>
          <Overlay></Overlay>
          <CardContainer>
            <h2>Business purpose booking?</h2>
            <h5>We find out that your booking is in </h5>
            <h5>business hours (8AM-6PM). We can</h5>
            <h5>help you switch to business tag.</h5>
            <ContainerRow>
              <SecondaryButton>Ignore</SecondaryButton>
              <PrimaryButton>Switch Tag</PrimaryButton>
            </ContainerRow>
          </CardContainer>
        </ModalContainer>
        <Payment>
          <Link to='/payment'>
            <ShapeButton />
          </Link>
        </Payment>
        <Loading>
          <Link to='/loading'>
            <ShapeButton />
          </Link>
        </Loading>
        <Screen src={bookingBg} alt='bookingBg'></Screen>
      </ScreenContainer>
      <Test>
        Booking
        <br />
        <Link to='/payment'>
          <Button buttonText='Go to payment' />
        </Link>
        <Link to='/loading'>
          <Button buttonText='Go to loading' />
        </Link>
      </Test>
    </>
  );
}
