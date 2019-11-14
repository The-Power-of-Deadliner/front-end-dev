import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import addBusinessBg from 'images/add-business.png';

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
      <Screen src={addBusinessBg} alt='addBusinessBg'></Screen>
      <Test>
        Add business
        <br />
        <Link to='/email'>
          <Button buttonText='Go to email' />
        </Link>
      </Test>
    </>
  );
}
