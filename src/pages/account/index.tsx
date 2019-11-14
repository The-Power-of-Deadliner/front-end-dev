import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import accountBg from 'images/account.png';

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
      <Screen src={accountBg} alt='accountBg'></Screen>
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
