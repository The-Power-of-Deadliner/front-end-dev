import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
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

export default function Page() {
  return (
    <>
      <Screen src={destinationBg} alt='destinationBg'></Screen>
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
