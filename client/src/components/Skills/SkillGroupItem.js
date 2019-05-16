import React from 'react';
import './SkillGroupItem.css'

const SkillGroupItem = ({ group }) => {
  const subGroupItems = group.subGroups.map(subGroup => {
    const skillItem = subGroup.skills.map(skill => {
      let skillAddInfo = null;
      let skillDate = null;

      if (skill.additionalInformation) {
        skillAddInfo = <span>{skill.additionalInformation}</span>;
      }

      if (skill.date) {
        if (skill.date.to) {
          skillDate = (
            <div className="date inline">
              <span> {skill.date.from}</span>
              <span>- {skill.date.to}</span>
            </div>
          );
        } else {
          skillDate = (
            <div className="date inline">
              <span> {skill.date.from}</span>
            </div>
          );
        }
      }

      return (
        <span key={skill._id}>
          <span>{skill.skillName} </span>
          {skillAddInfo}
          {skillDate}
        </span>
      );
    });
    return (
      <li key={subGroup._id}>
        <h3 className="sub-header inline">{subGroup.subGroupName}: </h3>
        {skillItem}
      </li>
    );
  });

  return (
    <div className="skill-group-item">
      <h2 className="header">{group.skillGroupName}</h2>
      <ul className="additional-information">{subGroupItems}</ul>
    </div>
  );
};

export default SkillGroupItem;
