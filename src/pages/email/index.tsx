import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
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

export default function Page() {
  return (
    <>
      <Screen src={emailBg} alt='emailBg'></Screen>
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
