import React from 'react';
import './EditButton.css'

const EditButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="edit-button">
      {text}
    </button>
  );
};

export default EditButton;
