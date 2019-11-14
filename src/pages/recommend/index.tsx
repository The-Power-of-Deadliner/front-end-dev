// import React from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/button';
import RidePlans from 'components/rideplans';
import { Link } from 'react-router-dom';
import recommendBg from 'images/recommend.png';
import axios from 'axios';

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
  margin: 90px 27px;
  position: absolute;
  z-index: 2;
`;

const RecommendsContainer = styled.div`
  margin-top: 140px;
  position: absolute;
  z-index: 2;
`;

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  source: string;
  dest: string;
  cost: number;
  schedule: string;
  vehicle: string;
  distance: number;
  duration: number;
}

type PageState = {
  data: any[];
};

class Page extends Component<{}, PageState> {
  componentWillMount() {
    this.setState({
      data: []
    });

    axios
      .get(
        'https://hikeathon-functions.azurewebsites.net/api/leaveReccomendation'
      )
      .then((response: any) => {
        this.setState({
          data: response.data.leavingTimes
        });
        console.log(this.state.data);
      });
  }

  render() {
    let recommends: any[] = [];

    for (let i = 0; i < this.state.data.length; i++) {
      let data: any = this.state.data[i];
      recommends.push(
        <RidePlans
          source={data.source}
          dest={data.dest}
          cost={data.cost}
          schedule={data.schedule}
          vehicle={data.vehicle}
          distance={data.distance / 1000}
          duration={Math.floor(data.duration / 60)}
          key={i}
        />
      );
    }
    return (
      <>
        <ScreenContainer>
          <TextContainer>
            <h2>Today</h2>
            <h4>6 November 2019</h4>
          </TextContainer>
          <RecommendsContainer>{recommends}</RecommendsContainer>
          {console.log(recommends)}
          <Screen src={recommendBg} alt='recommendBg'></Screen>
        </ScreenContainer>
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
}

export default Page;
