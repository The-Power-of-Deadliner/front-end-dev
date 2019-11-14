import React from 'react';
import styled from 'styled-components';
import grabcaricon from 'images/grabcar-icon.png';
import pinpoint from 'images/pinpoint.png';
import clockicon from 'images/clock-icon.png';

const CardContainer = styled.div`
  width: 56.2vh;
  background: #FFFFFF;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1em 1em;
  color: #333333;
  display: flex;
  flex-direction: column;
  color: black;

  position: absolute;
	width: 80%;
	left: 18px;
	top: 159px;
  z-index: 2;
  

`;

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const LineDivider = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  left: 4%;
  right: 4%;
  width: 100%;
  border: 1px solid #E0E0E0;
`;

const GrabIcon = styled.img`
	width: 64px;
	height: 64px;
`;

const Pinpoint = styled.img`
	width: 10%;
`;

const ClockIcon = styled.img`
	width: 7%;
`;

const h3Green = styled.h3`
	color: ##00B14D;
	font-weight: bold;
	text-align: right;
	margin-right: 50px;
`;

export default function RidePlans() {
  return (
    <CardContainer>
      <ContainerRow>
        <GrabIcon src={grabcaricon} alt='grabcaricon'/>
        <Pinpoint src={pinpoint} alt='pinpoint'/>
        <ContainerColumn>
        <h4>Tempat asal</h4>
        <h4>Tempat tujuan</h4>
        </ContainerColumn>
      </ContainerRow>

      <LineDivider></LineDivider> 

      <ContainerRow>
        <ClockIcon src={clockicon} alt='clockicon'/>
        <h4>10 mins • 1.7 km</h4>
      </ContainerRow>

      <ContainerRow>
        <h3>Depart on <b>8.22</b></h3>
        <h3>Rp15.000</h3>
      </ContainerRow>

    </CardContainer>
  );
}
