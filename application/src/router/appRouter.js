import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Main, Login, OrderFormHook, ViewOrdersHook } from '../components';

const AppRouter = () => {

  const auth = useSelector(state => state.auth)

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      {auth.email ?
        <>
          <Route path="/order" exact component={OrderFormHook} />
          <Route path="/view-orders" exact component={ViewOrdersHook} />
        </> :
        <Redirect to="/Login"/>
      }
    </Router>
  );
}

export default AppRouter;
