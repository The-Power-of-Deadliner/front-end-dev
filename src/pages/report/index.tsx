import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import reportBg from 'images/report.png';

const Test = styled.div`
  text-align: center;
`;

const Screen = styled.img`
  width: 360px;
  height: 640px;
  display: block;
  margin: auto;
`;

export default function Page() {
  return (
    <>
      <Screen src={reportBg} alt='reportBg'></Screen>
      <Test>
        Report
        <br />
        <Link to='/home'>
          <Button buttonText='Go to home' />
        </Link>
      </Test>
    </>
  );
}
