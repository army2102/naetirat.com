const CONFIG = require('../../config/config');
const bcryptJS = require('bcryptjs');
const Profile = require('../../models/profile');

const ADMIN_PASSWORD = CONFIG.ADMIN_PASSWORD;
const INITIAL_PROFILE = CONFIG.INITIAL_PROFILE;

exports.getProfile = (req, res, next) => {
  Profile.find({ firstname: 'Naetirat' })
    .then(profile => {
      if (profile.length === 0) {
        throw 'There is no profile in the database';
      }
      res.status(200).json(profile);
    })
    .catch(err => res.status(404).json({ message: err }));
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
      res.json(result);
    })

    .catch(err => res.status(404).json({ message: err }));
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
      res.status(201).json({ message: 'Profile created' });
    })
    .catch(err => {
      res.status(409).json({ message: 'Something bad happened' });
    });
};
