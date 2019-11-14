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
