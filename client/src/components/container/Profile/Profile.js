import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { fetchProfile, initProfile } from '../../../actions';
import { isEmpty } from '../../../util/isEmpty';

import Spinner from '../../util/Spinner/Spinner';
import Button from '../../util/Button/Button';
import FlashMessage from '../../util/FlashMessage/FlashMessage';
import ContentCenter from '../../util/ContentCenter/ContentCenter';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AboutMe from './AboutMe/AboutMe';
import Educations from './Educations/Educations';
import Skills from './Skills/Skills';
import WorkExperiences from './WorkExperiences/WorkExperiences';
import PersonalProjects from './PersonalProjects/PersonalProjects';
import Awards from './Awards/Awards';
import Activities from './Activities/Activities';

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  onInitProfile = () => {
    // TODO: fetch profile onto the page after initialized
    this.props.initProfile();
    this.props.fetchProfile();
  };

  render() {
    let contents = (
      <main>
        <Spinner />
      </main>
    );

    if (!isEmpty(this.props.errorMessage)) {
      contents = (
        <main className="profile">
          <ContentCenter>
            <div className="error-message">
              <FlashMessage error message={this.props.errorMessage.data} />
              <Button onClick={this.onInitProfile} text="Initialize Profile" />
            </div>
          </ContentCenter>
        </main>
      );
    } else {
      contents = (
        <main className="profile">
          <ProfileInfo />
          <AboutMe />
          <Educations />
          <Skills />
          <WorkExperiences />
          <PersonalProjects />
          <Awards />
          <Activities />
        </main>
      );
    }
    return contents;
  }
}

const mapStateToProps = ({ profile, errorMessage }) => {
  return { profile, errorMessage };
};

export default connect(
  mapStateToProps,
  { fetchProfile, initProfile }
)(Profile);
