import React from 'react';
import { connect } from 'react-redux';
import PersonalProjectItem from './PersonalProjectItem';

const PersonalProjects = ({ personalProjects }) => {
  if (!personalProjects) {
    return null;
  }
  const personalProjectList = personalProjects.map(personalProject => {
    return (
      <PersonalProjectItem
        key={personalProject._id}
        personalProject={personalProject}
      />
    );
  });
  return (
    <section id="personal-projects">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Personal Projects</h2>
        </div>
        <div className="card-content">{personalProjectList}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { personalProjects } }) => {
  return { personalProjects };
};

export default connect(mapStateToProps)(PersonalProjects);
