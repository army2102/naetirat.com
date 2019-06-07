const express = require('express');

const router = express.Router();

const apiProfileController = require('../../controllers/api/profile');

router.get('/', apiProfileController.getProfile);

router.put('/', apiProfileController.updateProfile);

router.delete('/', apiProfileController.deleteProfile);

router.post('/init', apiProfileController.initProfile);

module.exports = router;
