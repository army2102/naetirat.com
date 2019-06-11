const bcryptJS = require('bcryptjs');
const CONFIG = require('../../config/config');
const Profile = require('../../models/profile');

const ADMIN_PASSWORD = CONFIG.ADMIN_PASSWORD;
const INITIAL_PROFILE = CONFIG.INITIAL_PROFILE;

exports.getProfile = (req, res, next) => {
  Profile.findOne()
    .then(profile => {
      if (!profile) {
        throw 'There is no profile in the database';
      }
      res.status(200).json({ profile, message: 'Fetch Sucess' });
    })
    .catch(err => res.status(404).json(err));
};

exports.updateProfile = (req, res, next) => {
  Profile.findOne()
    .then(profile => {
      if (!profile) {
        throw 'There is no profile in the database, please initialize it first';
      }

      // TODO: validate req.body before update
      return profile.updateOne(req.body);
    })
    .then(result => {
      // TODO: Return something that is consistent with other APIs in this file
      res.json(result);
    })

    .catch(err => res.status(404).json(err));
};

exports.deleteProfile = (req, res, next) => {
  Profile.findOne()
    .then(profile => {
      if (!profile) {
        throw 'There is no profile in the database, please initialize it first';
      }

      return profile.deleteOne();
    })
    .then(result => {
      // TODO: return something more understandable
      res.json({ profile: {}, message: 'Profile Deleted' });
    })
    .catch(err => res.status(404).json(err));
};

exports.initProfile = (req, res, next) => {
  Profile.findOne()
    .then(profile => {
      if (profile) {
        throw 'There is already one profile in the database';
      }
      return bcryptJS.hash(ADMIN_PASSWORD, 12);
    })
    .then(hashedPassword => {
      const newProfile = new Profile({
        ...INITIAL_PROFILE,
        password: hashedPassword
      });
      return newProfile.save();
    })
    .then(result => {
      res.status(201).json({ profile: result, message: 'Profile Created' });
    })
    .catch(err => {
      res.status(409).json(err);
    });
};
