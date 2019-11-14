import React from 'react';
import styled from 'styled-components';
import grabcaricon from 'images/grabcar-icon.png';
import pinpoint from 'images/pinpoint.png';
import clockicon from 'images/clock-icon.png';

const CardContainer = styled.div`
  width: 275px;
  background: #ffffff;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1em 1em;
  color: #333333;
  display: flex;
  flex-direction: column;
  color: black;
  position: absolute;
  margin-left: 25px;
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
  border: 1px solid #e0e0e0;
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

const Place = styled.div`
  line-height: 30px;
  margin-left: 5px;
`;

const Time = styled.div`
  margin-left: 8px;
  margin-top: 1px;
`;

const Depart = styled.div`
  margin-top: 8px;
`;

const Price = styled.div`
  margin-top: 9px;
  font-weight: bold;
  margin-left: 97px;
  color: #00b14f;
`;

export default function RidePlans() {
  return (
    <CardContainer>
      <ContainerRow>
        <GrabIcon src={grabcaricon} alt='grabcaricon' />
        <Pinpoint src={pinpoint} alt='pinpoint' />
        <ContainerColumn>
          <Place>
            <h4>Tempat asal</h4>
            <h4>Tempat tujuan</h4>
          </Place>
        </ContainerColumn>
      </ContainerRow>

      <LineDivider></LineDivider>

      <ContainerRow>
        <ClockIcon src={clockicon} alt='clockicon' />
        <Time>
          <h4>10 mins • 1.7 km</h4>
        </Time>
      </ContainerRow>

      <ContainerRow>
        <Depart>
          <h3>
            Depart on <b>8.22</b>
          </h3>
        </Depart>
        <Price>Rp15.000</Price>
      </ContainerRow>
    </CardContainer>
  );
}
