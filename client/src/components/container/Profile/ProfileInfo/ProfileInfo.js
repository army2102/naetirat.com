import React from 'react';
import { connect } from 'react-redux';
import './ProfileInfo.css';

const ProfileInfo = ({ socials, email }) => {
  if (!socials || !email) {
    return null;
  }

  return (
    <section id="profile-information" className="section">
      <img id="profile-pic" src="/img/profile-pic.png" alt="" />
      <p id="contact-information">{email}</p>
      <ul id="socials">
        <a
          href={socials[0].socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <i className="fab fa-linkedin" />
          </li>
        </a>
        <a
          href={socials[2].socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <i className="fab fa-free-code-camp" />
          </li>
        </a>
        <a
          href={socials[1].socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <i className="fab fa-github-square" />
          </li>
        </a>
      </ul>
    </section>
  );
};

const mapStateToProps = ({ profile: { email, socials } }) => {
  return {
    email,
    socials
  };
};

export default connect(mapStateToProps)(ProfileInfo);
