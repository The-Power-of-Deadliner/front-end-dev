import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import RidePlans from 'components/rideplans'
import { Link } from 'react-router-dom';
import recommendBg from 'images/recommend.png';

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

const TextContainer = styled.div`
  margin: 90px 27px;
  position: absolute;
  z-index: 2;
`;

export default function Page() {
  return (
    <>
      <ScreenContainer>
        <TextContainer>
          <h2>Today</h2>
          <h4>6 November 2019</h4>

          </TextContainer>
        <RidePlans/>
        
        <Screen src={recommendBg} alt='recommendBg'></Screen>
      </ScreenContainer>


      <Test>
        Recommend
        <br />
        <Link to='/'>
          <Button buttonText='Go to home' />
        </Link>


      </Test>
    </>
  );
}
