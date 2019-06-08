import React from 'react';
import './Profile.css'
import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';

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
    if (this.props.profile && this.props.profile.length !== 0) {
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

const mapStateToProps = ({ profile }) => {
  return { profile };
};

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
