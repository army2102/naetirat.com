import React from 'react';
import { connect } from 'react-redux';

const Goal = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <section id="goal">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Goal</h2>
        </div>
        <div className="card-content">
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { description } }) => {
  return {
    description
  };
};

export default connect(mapStateToProps)(Goal);
