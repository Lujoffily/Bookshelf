const router = require('express').Router();
const logRoute = require('./userRoutes');
const newRoute = require('./newuse');

router.use('/userRoutes', logRoute);
router.use('/signup', newRoute);

module.exports = router 