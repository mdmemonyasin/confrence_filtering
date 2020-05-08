const express = require('express');
const confController = require('../controllers/conf');

const router = express.Router();

router.get('/',confController.getConf);

module.exports = router;
