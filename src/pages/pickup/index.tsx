import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import pickupBg from 'images/pickup.png';

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

export default function Page() {
  return (
    <>
      <ScreenContainer>
        <Link to='/destination'>
          <TransButton />
        </Link>
        <Screen src={pickupBg} alt='pickupBg'></Screen>
      </ScreenContainer>
      <Test>
        Pick up
        <br />
        <Link to='/destination'>
          <Button buttonText='Go to destination' />
        </Link>
      </Test>
    </>
  );
}
