import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import ShapeButton from 'components/shape-trans';
import { Link } from 'react-router-dom';
import paymentBg from 'images/payment.png';

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

export default function Page() {
  return (
    <>
      <ScreenContainer>
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
