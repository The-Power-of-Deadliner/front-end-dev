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
        Payment
        <br />
        <Link to='/booking'>
          <Button buttonText='Go to booking' />
        </Link>
      </Test>
    </>
  );
}
