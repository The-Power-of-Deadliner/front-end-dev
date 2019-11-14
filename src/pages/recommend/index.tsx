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
        Recommend
        <br />
        <Link to='/'>
          <Button buttonText='Go to home' />
        </Link>
      </Test>
    </>
  );
}
