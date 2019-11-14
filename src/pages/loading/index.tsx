import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import loadingBg from 'images/loading.png';

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
        <Link to='/report'>
          <TransButton />
        </Link>
        <Screen src={loadingBg} alt='loadingBg'></Screen>
      </ScreenContainer>
      <Test>
        Loading
        <br />
        <Link to='/report'>
          <Button buttonText='Go to report' />
        </Link>
      </Test>
    </>
  );
}
