import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import homeBg from 'images/home.jpg';

const Test = styled.div`
  text-align: center;
`;

const Screen = styled.img`
  width: 360px;
  height: 640px;
  display: block;
  margin: auto;
`;

const ScreenContainer = styled.div`
  width: 360px;
  height: 640px;
  display: block;
  margin: auto;
`;

const CardContainer = styled.div`
  position: absolute;
  width: 333px;
  height: 241px;
  left: 14px;
  top: 200px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  padding: 40px 0;
`;

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`;
const PrimaryButton = styled.button`
  background: #00b14d;
  color: white;
  width: 143.6px;
  height: 43px;
  font-size: 16px;
  padding: 0.25em 1em;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 4px;
`;
const SecondaryButton = styled.button`
  background: white;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 5px;
  width: 143.6px;
  height: 43px;
  font-size: 16px;
  padding: 0.25em 1em;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 4px;
  margin-left: 18px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 362px;
  height: 640px;
  left: -2px;
  top: 0px;
  /* Overlay */
  background: linear-gradient(
    180deg,
    rgba(55, 59, 70, 0.4) 0%,
    rgba(55, 59, 70, 0.4) 100%
  );
`;

const ModalContainer = styled.div`
  position: absolute;
  font-family: 'Open Sans', sans-serif;
  z-index: 3;
`;

export default function Page() {
  return (
    <>
      <ScreenContainer>
        <ModalContainer>
          <Overlay></Overlay>
          <CardContainer>
            <h2>Ride Plan Recommendation</h2>
            <h5>Now you can view recommended ride plan to</h5>
            <h5>stay on time in your appointments. Tap ‘Agree’</h5>
            <h5>to see our recommendation.</h5>
            <ContainerRow>
              <SecondaryButton>Not now</SecondaryButton>
              <PrimaryButton>Agree</PrimaryButton>
            </ContainerRow>
          </CardContainer>
        </ModalContainer>
        <Link to='/account'>
          <TransButton />
        </Link>
        <Screen src={homeBg} alt='homeBg'></Screen>
      </ScreenContainer>
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
