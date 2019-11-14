import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from 'pages/account';
import AddBusiness from 'pages/add-business';
import AllRoutes from 'pages/all-routes';
import Booking from 'pages/booking';
import Business from 'pages/business';
import Destination from 'pages/destination';
import Email from 'pages/email';
import Home from 'pages/home';
import Loading from 'pages/loading';
import Login from 'pages/login';
import Payment from 'pages/payment';
import Pickup from 'pages/pickup';
import Recommend from 'pages/recommend';
import Report from 'pages/report';
import Success from 'pages/success';
import Verif from 'pages/verif';
import VerifBusiness from 'pages/verif-business';

export default function Page() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/verif' component={Verif} />
      <Route path='/account' component={Account} />
      <Route path='/add-business' component={AddBusiness} />
      <Route path='/email' component={Email} />
      <Route path='/verif-business' component={VerifBusiness} />
      <Route path='/success' component={Success} />
      <Route path='/business' component={Business} />
      <Route path='/pickup' component={Pickup} />
      <Route path='/destination' component={Destination} />
      <Route path='/booking' component={Booking} />
      <Route path='/payment' component={Payment} />
      <Route path='/loading' component={Loading} />
      <Route path='/report' component={Report} />
      <Route path='/recommend' component={Recommend} />
      <Route path='/all-routes' component={AllRoutes} />
    </Switch>
  );
}
