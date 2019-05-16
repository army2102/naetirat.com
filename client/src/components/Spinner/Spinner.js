import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
  render() {
    return (
      <div className="overlay">
        <div className="spinner" />
      </div>
    );
  }
}

export default Spinner;
