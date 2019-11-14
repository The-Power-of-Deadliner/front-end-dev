import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import emailBg from 'images/email.png';

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
        <Link to='/verif-business'>
          <TransButton />
        </Link>
        <Screen src={emailBg} alt='emailBg'></Screen>
      </ScreenContainer>
      <Test>
        Email
        <br />
        <Link to='/verif-business'>
          <Button buttonText='Go to verif-business' />
        </Link>
      </Test>
    </>
  );
}
