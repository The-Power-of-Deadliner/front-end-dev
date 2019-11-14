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
        Test
        <br />
        <Link to='/login'>
          <Button buttonText='Go to login' />
        </Link>
      </Test>
    </>
  );
}
