import React from 'react';
import { Route } from 'react-router-dom';

import Profile from '../../container/Profile/Profile';
import ControlPanel from '../../container/ControlPanel/ControlPanel';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Profile} />
        <Route path="/config" exact component={ControlPanel} />
      </div>
    );
  }
}

export default Main;
