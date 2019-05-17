import React from 'react';
import { connect } from 'react-redux';

const AboutMe = ({ aboutMe }) => {
  if (!aboutMe) {
    return null;
  }

  return (
    <section id="goal">
      <div className="card">
        <div className="card-header">
          <h2 className="header">About Me</h2>
        </div>
        <div className="card-content">
          <p className="text-justify">{aboutMe}</p>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { aboutMe } }) => {
  return {
    aboutMe
  };
};

export default connect(mapStateToProps)(AboutMe);
