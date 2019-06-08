import React from 'react';
import './EducationItem.css'

const EducationItem = ({ education }) => {
  let date = null;
  if (education.date) {
    if (education.date.to) {
      date = (
        <div className="date">
          <span> {education.date.from} </span>
          <span>- {education.date.to} </span>
        </div>
      );
    } else {
      date = (
        <div className="date">
          <span> {education.date.from} </span>
        </div>
      );
    }
  }

  return (
    <div className="education-item">
      <h3 className="header">{education.educationName}</h3>
      {date}
      <p> {education.address} </p>
      <p className="degree"> {education.degree} </p>
      <ul className="additional-information">
        <li> {education.additionalInformation[0]} </li>
        <li> {education.additionalInformation[1]} </li>
      </ul>
    </div>
  );
};

export default EducationItem;
