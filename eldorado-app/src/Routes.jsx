import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Management from './pages/Management';


const Routes = () => (
  <Switch>
    <Route exact path="/management" component={Management} />
    <Route exact path="/" component={Management} />
  </Switch>
);

export default Routes;
