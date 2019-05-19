import React from 'react';
import './WorkExperienceItem.css';

const WorkExperienceItem = ({ workExperience }) => {
  const addInfoList = workExperience.additionalInformation.map(
    (addInfo, index) => {
      return <li key={index}>{addInfo}</li>;
    }
  );

  let date = null;
  if (workExperience.date) {
    if (workExperience.date.to) {
      date = (
        <div className="date">
          <span>{workExperience.date.from} </span>
          <span>- {workExperience.date.to} </span>
        </div>
      );
    } else {
      date = (
        <div className="date">
          <span>{workExperience.date.from} </span>
        </div>
      );
    }
  }

  return (
    <div className="workExperience-item">
      <h2 className="header">{workExperience.companyName}</h2>
      {date}
      <p>{workExperience.address}</p>
      <p className="position">{workExperience.position}</p>
      <p className="description">{workExperience.description}</p>
      <ul className="additional-information">{addInfoList}</ul>
    </div>
  );
};

export default WorkExperienceItem;
