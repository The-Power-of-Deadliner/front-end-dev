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

export default function Page() {
  return (
    <>
      <ScreenContainer>
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
