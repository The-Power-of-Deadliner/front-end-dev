import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import homeBg from 'images/home.jpg';

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
        <Link to='/account'>
          <TransButton />
        </Link>
        <Screen src={homeBg} alt='homeBg'></Screen>
      </ScreenContainer>
      <Test>
        Home
        <br />
        <Link to='/account'>
          <Button buttonText='Go to account' />
        </Link>
        <Link to='/recommend'>
          <Button buttonText='Go to recommend' />
        </Link>
      </Test>
    </>
  );
}
