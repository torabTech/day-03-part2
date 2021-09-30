const controller = require('../controller/controller')
const express = require('express');
const router = express.Router();

router.route('/:first').get(controller.addNumbers);
router.route('/').get(controller.home);

module.exports = router;