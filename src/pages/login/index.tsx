import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import loginBg from 'images/login.png';

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
        <Link to='/verif'>
          <TransButton />
        </Link>
        <Screen src={loginBg} alt='loginBg'></Screen>
      </ScreenContainer>
      <Test>
        Login
        <br />
        <Link to='/verif'>
          <Button buttonText='Go to verif' />
        </Link>
        <Link to='/all-routes'>
          <Button buttonText='Go to all-routes' />
        </Link>
      </Test>
    </>
  );
}
