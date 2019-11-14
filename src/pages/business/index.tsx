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
        Business
        <br />
        <Link to='/pickup'>
          <Button buttonText='Go to pickup' />
        </Link>
      </Test>
    </>
  );
}
