import React from 'react';
import { connect } from 'react-redux';

import WorkExperienceItem from './WorkExperienceItem';

const WorkExperiences = ({ workExperiences }) => {
  if (!workExperiences) {
    return null;
  }
  const workExperienceList = workExperiences.map(workExperience => {
    return (
      <WorkExperienceItem
        key={workExperience._id}
        workExperience={workExperience}
      />
    );
  });
  return (
    <section id="personal-projects">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Work Experiences</h2>
        </div>
        <div className="card-content">{workExperienceList}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  profile: {
    profile: { workExperiences }
  }
}) => {
  return { workExperiences };
};

export default connect(mapStateToProps)(WorkExperiences);
