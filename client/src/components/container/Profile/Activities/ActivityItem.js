import React from 'react';
import './ActivityItem.css'

const ActivityItem = ({ activity }) => {
  let date = null;
  if (activity.date) {
    if (activity.date.to) {
      date = (
        <div className="date">
          <span>{activity.date.from} </span>
          <span>- {activity.date.to} </span>
        </div>
      );
    } else {
      date = (
        <div className="date">
          <span>{activity.date.from} </span>
        </div>
      );
    }
  }
  const addInfoList = activity.additionalInformation.map((addInfo, index) => {
    return <li key={index}>{addInfo}</li>;
  });

  return (
    <div className="activity-item">
      <h2 className="header">{activity.activityName}</h2>
      {date}
      <p className="position">{activity.position}</p>
      <ul className="additional-information">{addInfoList} </ul>
    </div>
  );
};

export default ActivityItem;
