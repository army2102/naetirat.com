import React from 'react';
import './ControlPanel.css';
import { isEmpty } from '../../../util/isEmpty';
import { connect } from 'react-redux';
import { initProfile, deleteProfile } from '../../../actions/index';

class ControlPanel extends React.Component {
  onInitProfile = () => {
    this.props.initProfile();
  };

  onDeleteProfile = () => {
    this.props.deleteProfile();
  };

  render() {
    let message = null;
    if (!isEmpty(this.props.errorMessage)) {
      message = this.props.errorMessage.data;
    } else if (this.props.profile.hasOwnProperty('message')) {
      message = this.props.profile.message;
    }

    return (
      <main className="control-panel">
        <h1>Control Panel</h1>
        <div>{message}</div>
        <div>
          <h2>Init Profile</h2>
          <button onClick={this.onInitProfile}>Init Profile</button>
        </div>
        <div>
          <h2>Delete Profile</h2>
          <button onClick={this.onDeleteProfile}>Delete Profile</button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ profile, errorMessage }) => {
  return {
    profile,
    errorMessage
  };
};

export default connect(
  mapStateToProps,
  { initProfile, deleteProfile }
)(ControlPanel);
