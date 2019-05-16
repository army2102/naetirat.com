import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';

import Spinner from '../../Spinner/Spinner';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';
import Goal from '../../Goal/Goal';
import Educations from '../../Educations/Educations';
import Skills from '../../Skills/Skills';
import Experiences from '../../Experiences/Experiences';
import Awards from '../../Awards/Awards';
import Activities from '../../Activities/Activities';

class Main extends React.Component {
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
        <main>
          <ProfileInfo />
          <Goal />
          <Educations />
          <Skills />
          <Experiences />
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
)(Main);
