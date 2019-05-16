import React from 'react';
import './App.css';

import Header from '../Layout/Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
