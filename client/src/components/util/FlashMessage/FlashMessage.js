import React from 'react';
import './FlashMessage.css';

const FlashMessage = ({ message, error }) => {
  return (
    <div className={error ? 'flash-message error' : 'flash-message'}>
      {message}
    </div>
  );
};

export default FlashMessage;
