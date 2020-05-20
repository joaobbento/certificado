import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Certificate from './pages/Certificate';
import Create from './pages/Create';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Create} />
        <Route path="/certificate" component={Certificate} />
      </Switch>
    </BrowserRouter>
  )
}