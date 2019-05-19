import React from 'react';
import './PersonalProjectItem.css';

const PersonalProjectItem = ({ personalProject }) => {
  const addInfoList = personalProject.additionalInformation.map(
    (addInfo, index) => {
      return <li key={index}>{addInfo}</li>;
    }
  );

  let skillSet = null;
  if (personalProject.skillSet.length !== 0) {
    const skillList = personalProject.skillSet.map((skill, index) => {
      return <span key={index}> {skill} </span>;
    });
    skillSet = <div> ( {skillList} ) </div>;
  }
  let projectUrl = null;
  if (personalProject.projectUrl) {
    projectUrl = (
      <div>
        <a
          href={personalProject.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          ( {personalProject.projectUrl} )
        </a>
      </div>
    );
  }

  let date = null;
  if (personalProject.date) {
    if (personalProject.date.to) {
      date = (
        <div className="date">
          <span>{personalProject.date.from} </span>
          <span>- {personalProject.date.to} </span>
        </div>
      );
    } else {
      date = (
        <div className="date">
          <span>{personalProject.date.from} </span>
        </div>
      );
    }
  }

  return (
    <div className="personalProject-item">
      <h2 className="header">{personalProject.projectName}</h2>
      {skillSet}
      {projectUrl}
      {date}
      <p className="description">{personalProject.description}</p>
      <ul className="additional-information">{addInfoList}</ul>
    </div>
  );
};

export default PersonalProjectItem;
