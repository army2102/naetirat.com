const Profile = require('../models/profile');

exports.getProfile = (req, res, next) => {
  Profile.findOne()
    .then(profile => {
      res.render('profile', { profile });
    })
    .catch(err => {
      console.log(err);
    });
};

