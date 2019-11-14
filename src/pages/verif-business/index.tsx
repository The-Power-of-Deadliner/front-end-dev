import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
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

export default function Page() {
  return (
    <>
      <Screen src={verifBusinessBg} alt='verifBusinessBg'></Screen>
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
