const router = require('express').Router();
const apiRoutes = require('./api');

const handlebarRoutes = require("./handlebarsRoutes.js")
router.use('/api', apiRoutes);
router.use("/",handlebarRoutes);

module.exports = router