import React from 'react';
import { connect } from 'react-redux';
import AwardItem from './AwardItem';

const Awards = ({ awards }) => {
  if (!awards) {
    return null;
  }
  const awardList = awards.map(award => {
    return <AwardItem key={award._id} award={award} />;
  });
  return (
    <section id="awards">
      <div className="card">
        <div className="card-header">
          <h2 className="header">Awards</h2>
        </div>
        <div className="card-content">{awardList}</div>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  profile: {
    profile: { awards }
  }
}) => {
  return { awards };
};

export default connect(mapStateToProps)(Awards);
