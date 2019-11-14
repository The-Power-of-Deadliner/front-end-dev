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
        TAll routes
        <br />
        <Link to='/'>
          <Button buttonText='Go to login' />
        </Link>
        <Link to='/account'>
          <Button buttonText='Go to account' />
        </Link>
        <Link to='/add-business'>
          <Button buttonText='Go to add-business' />
        </Link>
        <Link to='/booking'>
          <Button buttonText='Go to booking' />
        </Link>
        <Link to='/business'>
          <Button buttonText='Go to business' />
        </Link>
        <Link to='/destination'>
          <Button buttonText='Go to destination' />
        </Link>
        <Link to='/email'>
          <Button buttonText='Go to email' />
        </Link>
        <Link to='/home'>
          <Button buttonText='Go to booking' />
        </Link>
        <Link to='/loading'>
          <Button buttonText='Go to loading' />
        </Link>
        <Link to='/payment'>
          <Button buttonText='Go to payment' />
        </Link>
        <Link to='/pickup'>
          <Button buttonText='Go to pickup' />
        </Link>
        <Link to='/recommend'>
          <Button buttonText='Go to recommend' />
        </Link>
        <Link to='/report'>
          <Button buttonText='Go to report' />
        </Link>
        <Link to='/success'>
          <Button buttonText='Go to success' />
        </Link>
        <Link to='/verif'>
          <Button buttonText='Go to verif' />
        </Link>
        <Link to='/verif-business'>
          <Button buttonText='Go to verif-business' />
        </Link>
      </Test>
    </>
  );
}
