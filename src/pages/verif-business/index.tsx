import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import verifBusinessBg from 'images/verif-business.png';

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
        <Link to='/success'>
          <TransButton />
        </Link>
        <Screen src={verifBusinessBg} alt='verifBusinessBg'></Screen>
      </ScreenContainer>
      <Test>
        Verif business
        <br />
        <Link to='/success'>
          <Button buttonText='Go to success' />
        </Link>
      </Test>
    </>
  );
}
