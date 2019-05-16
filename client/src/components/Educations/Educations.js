import React from 'react';
import { connect } from 'react-redux';
import EducationItem from './EducationItem';

const Educations = ({ educations }) => {
  if (!educations) {
    return null;
  }
  const educationList = educations.map(edu => {
    return <EducationItem key={edu._id} education={edu} />;
  });

  return (
    <section id="educations">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Education</h2>
        </div>
        <div className="card-content">{educationList}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { educations } }) => {
  return { educations };
};

export default connect(mapStateToProps)(Educations);
