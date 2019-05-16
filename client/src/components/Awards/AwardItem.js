import React from 'react';
import './AwardItem.css'

const AwardItem = ({ award }) => {
  let date = null;
  if (award.date) {
    if (award.date.to) {
      date = (
        <div className="date">
          <span>{award.date.from} </span>
          <span>- {award.date.to} </span>
        </div>
      );
    } else {
      date = (
        <div className="date">
          <span>{award.date.from} </span>
        </div>
      );
    }
  }

  const addInfoList = award.additionalInformation.map((addInfo, index) => {
    return <li key={index}>{addInfo}</li>;
  });

  return (
    <div className="award-item">
      <h2 className="header">{award.awardName}</h2>
      {date}
      <p> {award.address}</p>
      <ul className="additional-information">{addInfoList}</ul>
    </div>
  );
};

export default AwardItem;
