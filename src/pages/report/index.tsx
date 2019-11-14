import React from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import TransButton from 'components/button-trans';
import { Link } from 'react-router-dom';
import reportBg from 'images/report.png';
import piggyBank from 'images/piggy-bank-icon.png';


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
const TextContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 22px;
  left: 22px;
  top: 485px;
  z-index: 2;
`;
const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const PiggyBank = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  margin-top: 12px;
`;

const LongButton = styled.button`
  background: #00B14D;
  color: white;
  position: absolute;
  width: 328px;
  height: 43px;
  left: 16px;
  top: 586px;
  font-size: 2.76vh;
  padding: 0.25em 1em;
  border-radius: 5px;
`;

export default function Page() {
  return (
    <>
      <ScreenContainer>           
        <TextContainer>
          <ContainerRow>
            <div>
            <PiggyBank src={piggyBank} alt='piggyBank'/>
            </div>
            <div>
              <h4>Amount saved in this trip <b>Rp10.000</b></h4>
              <br></br>

              <h4>Prediction of total saved cost <b>Rp400.000</b></h4>
              <p>(For November 2019 only)</p>
             </div>
          </ContainerRow>
        </TextContainer>

        <LongButton>Submit</LongButton>

        <Link to='/home'>
          <TransButton />
        </Link>
        <Screen src={reportBg} alt='reportBg'></Screen>
      </ScreenContainer>
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
