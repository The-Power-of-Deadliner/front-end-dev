// import React from 'react';
import React, { Component } from 'react'
import styled from 'styled-components';
import Button from 'components/button';
import RidePlans from 'components/rideplans'
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

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  source: string
  dest: string
  cost: number
  schedule: string
  vehicle: string
  distance: number
  duration: number
}

type PageState = {
  data: any[]
}

class Page extends Component<{}, PageState> {

  componentWillMount() {
    this.setState({
      data:[]
    })
 
    axios.get(
      'https://hikeathon-functions.azurewebsites.net/api/leaveReccomendation',
    ).then((response) => {
      this.setState({
        data : response.data.leavingTimes
      })
      console.log(this.state.data)
    });
  };

  render() {

    return (
      <>
        <Screen src={recommendBg} alt='recommendBg'></Screen>
        {this.state.data.length === 0? "": this.state.data[0].source}
        {this.state.data.length === 0? "": this.state.data[1].source}
        {this.state.data.length === 0? "": this.state.data[2].source}
        {this.state.data.length === 0? "": this.state.data[3].source}
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