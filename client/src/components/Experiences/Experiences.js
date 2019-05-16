import React from 'react';
import { connect } from 'react-redux';
import ExperienceItem from './ExperienceItem';

const Experiences = ({ experiences }) => {
  if (!experiences) {
    return null;
  }
  const experienceList = experiences.map(experience => {
    return <ExperienceItem key={experience._id} experience={experience} />;
  });
  return (
    <section id="experiences">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Experiences</h2>
        </div>
        <div className="card-content">{experienceList}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { experiences } }) => {
  return { experiences };
};

export default connect(mapStateToProps)(Experiences);
