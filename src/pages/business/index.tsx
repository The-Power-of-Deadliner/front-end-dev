import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import businessBg from 'images/business.png';

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
      <Screen src={businessBg} alt='businessBg'></Screen>
      <Test>
        Business
        <br />
        <Link to='/pickup'>
          <Button buttonText='Go to pickup' />
        </Link>
      </Test>
    </>
  );
}
