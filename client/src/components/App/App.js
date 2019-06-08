import React from 'react';
import './App.css';

import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Footer from '../layout/Footer/Footer';

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
