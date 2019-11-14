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
        Booking
        <br />
        <Link to='/payment'>
          <Button buttonText='Go to payment' />
        </Link>
        <Link to='/loading'>
          <Button buttonText='Go to loading' />
        </Link>
      </Test>
    </>
  );
}
