import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Profile from '../../container/Profile/Profile';
import ControlPanel from '../../container/ControlPanel/ControlPanel';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Profile} />
        <Route path="/config" exact component={ControlPanel} />
      </BrowserRouter>
    );
  }
}

export default Main;
