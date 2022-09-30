const router = require('express').Router();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);


module.exports = router;

// anytthing that renders goes in homeroutes
// anything with database stuff goes in API routes.