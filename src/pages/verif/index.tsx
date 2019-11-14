import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import verifBg from 'images/verif.png';

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
        <Link to='/home'>
          <TransButton />
        </Link>
        <Screen src={verifBg} alt='verifBg'></Screen>
      </ScreenContainer>
      <Test>
        Verif
        <br />
        <Link to='/home'>
          <Button buttonText='Go to home' />
        </Link>
      </Test>
    </>
  );
}
