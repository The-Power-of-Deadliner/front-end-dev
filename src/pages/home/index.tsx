import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';

const Test = styled.div`
  text-align: center;
`;

export default function Page() {
  return (
    <>
      <Test>
        Test
        <br />
        <Button />
      </Test>
    </>
  );
}
