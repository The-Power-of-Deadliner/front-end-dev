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
        Add business
        <br />
        <Link to='/email'>
          <Button buttonText='Go to email' />
        </Link>
      </Test>
    </>
  );
}
