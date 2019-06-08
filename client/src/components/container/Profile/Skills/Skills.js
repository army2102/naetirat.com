import React from 'react';
import { connect } from 'react-redux';
import SkillGroupItem from './SkillGroupItem';

const Skills = ({ skillGroups }) => {
  if (!skillGroups) {
    return null;
  }
  const skillGroupItem = skillGroups.map(group => {
    return <SkillGroupItem key={group._id} group={group} />;
  });
  return (
    <section id="skills">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Skills</h2>
        </div>
        <div className="card-content">{skillGroupItem}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { skillGroups } }) => {
  return { skillGroups };
};

export default connect(mapStateToProps)(Skills);
