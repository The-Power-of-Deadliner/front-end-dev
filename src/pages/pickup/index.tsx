import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
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

export default function Page() {
  return (
    <>
      <Screen src={pickupBg} alt='pickupBg'></Screen>
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
