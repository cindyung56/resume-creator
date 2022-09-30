const router = require('express').Router();
const userRoutes = require('./userRoutes');
const resumeRoutes = require('./resume');


router.use('/users', userRoutes);
router.use('/resume', resumeRoutes);

module.exports = router;

// anytthing that renders goes in homeroutes
// anything with database stuff goes in API routes.