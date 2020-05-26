import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Certification from './pages/Certification';
import Create from './pages/Create';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Create} />
        <Route path="/certification" component={Certification} />
      </Switch>
    </BrowserRouter>
  )
}