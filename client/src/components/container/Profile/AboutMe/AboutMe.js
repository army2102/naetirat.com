import React from 'react';
import { connect } from 'react-redux';
import EditButton from '../../../util/EditButton/EditButton';

class AboutMe extends React.Component {
  state = {
    isEdit: false
  };

  onEditButtonClick = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  render() {
    const { aboutMe } = this.props;
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
          <EditButton onClick={this.onEditButtonClick} text="Edit" />
          {this.state.isEdit ? <div>Edit section</div> : null}
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({
  profile: {
    profile: { aboutMe }
  }
}) => {
  return {
    aboutMe: aboutMe
  };
};

export default connect(mapStateToProps)(AboutMe);
