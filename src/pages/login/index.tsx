import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';

const Test = styled.div`
  text-align: center;
`;

export default function Page() {
  return (
    <>
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
