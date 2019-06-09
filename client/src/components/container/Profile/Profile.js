import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';
import { isEmpty } from '../../../util/isEmpty';

import Spinner from '../../util/Spinner/Spinner';
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

  render() {
    let contents = (
      <main>
        <Spinner />
      </main>
    );

    if (!isEmpty(this.props.errorMessage)) {
      contents = (
        <main className="profile">
          <div className="error-message">{this.props.errorMessage.data}</div>
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
  { fetchProfile }
)(Profile);
