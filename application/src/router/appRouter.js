import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, OrderFormHook, ViewOrdersHook, Edit } from '../components';

const AppRouter = () => {

  const auth = useSelector(state => state.auth);

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/order" exact component={auth.email ? OrderFormHook : Login} />
      <Route path="/view-orders" exact component={auth.email ? ViewOrdersHook : Login} />
      <Route path="/edit" exact component={auth.email ? Edit : Login} />
    </Router>
  );
}

export default AppRouter;
