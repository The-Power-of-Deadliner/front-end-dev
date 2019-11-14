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
        Account
        <br />
        <Link to='/add-business'>
          <Button buttonText='Go to add-business' />
        </Link>
      </Test>
    </>
  );
}
