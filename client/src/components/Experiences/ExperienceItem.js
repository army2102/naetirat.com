import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ experience }) => {
  let skillSet = null;
  let date = null;
  
  const addInfoList = experience.additionalInformation.map((addInfo, index) => {
    return <li key={index}>{addInfo}</li>;
  });
  if (experience.skillSet.length !== 0) {
    const skillList = experience.skillSet.map((skill, index) => {
      return <span key={index}> {skill} </span>;
    });
    skillSet = <div className="inline"> ( {skillList} )</div>;
  }

  if (experience.date) {
    if (experience.date.to) {
      date = (
        <div className="date">
          <span>{experience.date.from} </span>
          <span>- {experience.date.to} </span>
        </div>
      );
    } else {
      date = (
        <div className="date">
          <span>{experience.date.from} </span>
        </div>
      );
    }
  }

  return (
    <div className="experience-item">
      <h2 className="header inline">{experience.experienceName}</h2>
      {skillSet}
      {date}
      <p>{experience.address}</p>
      <p className="position">{experience.position}</p>
      <ul className="additional-information">{addInfoList}</ul>
    </div>
  );
};

export default ExperienceItem;
