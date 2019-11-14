import React from 'react';
import styled from 'styled-components';
import grabcaricon from 'images/grabcar-icon.png';
import grabbikeicon from 'images/grabbike-icon.png';
import grabdeliveryicon from 'images/grabdelivery-icon.png';
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

`;

const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #181818;
  margin: 20px;
`;

const LineDivider = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  left: 4%;
  right: 4%;
  width: 100%;
  border: 1px solid #E0E0E0;
`;

export interface Props {
  buttonText: string;
}


export default function RidePlans() {
  return (
    <CardContainer>
      <ContainerRow>
        <img src={grabcaricon} alt='grabcaricon'></img>
        <img src={pinpoint} alt='pinpoint'></img>
        <ContainerColumn>
        <h4>Tempat asal</h4>
        <h4>Tempat tujuan</h4>
        </ContainerColumn>
      </ContainerRow>

      <LineDivider></LineDivider> 

      <ContainerRow>
        <img src={clockicon} alt='clockicon'></img>
        <h4>10 mins</h4>
        <h4>• 1.7 km</h4>

      </ContainerRow>

      <ContainerRow>
        <h3>Depart on <b>8.22</b></h3>
        <h3><b>Rp15.000</b></h3>
      </ContainerRow>

    </CardContainer>
  );
}
