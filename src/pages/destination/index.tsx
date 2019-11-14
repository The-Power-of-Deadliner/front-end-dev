import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import destinationBg from 'images/destination.png';

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
        <Link to='/booking'>
          <TransButton />
        </Link>
        <Screen src={destinationBg} alt='destinationBg'></Screen>
      </ScreenContainer>
      <Test>
        Destination
        <br />
        <Link to='/booking'>
          <Button buttonText='Go to booking' />
        </Link>
      </Test>
    </>
  );
}
