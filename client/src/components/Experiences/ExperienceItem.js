import React from 'react';
import './ExperienceItem.css';

const ExperienceItem = ({ experience }) => {
  const addInfoList = experience.additionalInformation.map((addInfo, index) => {
    return <li key={index}>{addInfo}</li>;
  });

  let skillSet = null;
  if (experience.skillSet.length !== 0) {
    const skillList = experience.skillSet.map((skill, index) => {
      return <span key={index}> {skill} </span>;
    });
    skillSet = <div className="inline"> ( {skillList} )  </div>;
  }
  let projectUrl = null;
  if (experience.projectUrl) {
    projectUrl = (
      <a href={experience.projectUrl} target="_blank" rel="noopener noreferrer">
        ( {experience.projectUrl} )
      </a>
    );
  }

  let date = null;
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
      {projectUrl}
      {date}
      <p>{experience.address}</p>
      <p className="position">{experience.position}</p>
      <p className="description">{experience.description}</p>
      <ul className="additional-information">{addInfoList}</ul>
    </div>
  );
};

export default ExperienceItem;
