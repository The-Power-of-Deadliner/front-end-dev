import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import successBg from 'images/success.png';

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
      <Screen src={successBg} alt='successBg'></Screen>
      <Test>
        Success
        <br />
        <Link to='/business'>
          <Button buttonText='Go to business' />
        </Link>
      </Test>
    </>
  );
}
