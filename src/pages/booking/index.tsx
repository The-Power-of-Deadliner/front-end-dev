import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
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

export default function Page() {
  return (
    <>
      <Screen src={bookingBg} alt='bookingBg'></Screen>
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
