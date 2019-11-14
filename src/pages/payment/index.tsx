import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
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

export default function Page() {
  return (
    <>
      <Screen src={paymentBg} alt='paymentBg'></Screen>
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
