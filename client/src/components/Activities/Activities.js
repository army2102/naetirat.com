import React from 'react';
import { connect } from 'react-redux';
import ActivityItem from './ActivityItem';

const Activities = ({ activities }) => {
  if (!activities) {
    return null;
  }
  const activityList = activities.map(activity => {
    return <ActivityItem key={activity._id} activity={activity} />;
  });
  return (
    <section id="activities">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Activities</h2>
        </div>
        <div className="card-content">{activityList}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ profile: { activities } }) => {
  return { activities };
};

export default connect(mapStateToProps)(Activities);
