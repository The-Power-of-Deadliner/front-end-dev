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

export default function Page() {
  return (
    <>
      <Screen src={recommendBg} alt='recommendBg'></Screen>
      <Test>
        Recommend
        <br />
        <Link to='/'>
          <Button buttonText='Go to home' />
        </Link>

        <RidePlans/>
        
      </Test>
    </>
  );
}
