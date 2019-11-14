import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import accountBg from 'images/account.png';
import businessButton from 'images/business-button.png';

const Test = styled.div`
  text-align: center;
`;

const Business = styled.img`
  width: 22vh;
  height: auto;
  margin: 9vh 12.5vh;
  position: absolute;
  z-index: 2;
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
        <Link to='/add-business'>
          <Business src={businessButton} alt='businessButton'></Business>
        </Link>
        <Screen src={accountBg} alt='accountBg'></Screen>
      </ScreenContainer>
      <Test>
        Account
        <br />
        <Link to='/add-business'>
          <Button buttonText='Go to add-business' />
        </Link>
      </Test>
    </>
  );
}
