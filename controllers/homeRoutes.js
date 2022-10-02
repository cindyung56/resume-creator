const router = require('express').Router();
const { User, Resume, Experience, Education, Reference, Skill } = require('../models');
// may need authentication here?

router.get('/', async (req, res) => {
    res.render('homepage')
});

// Routes to GET chosen template
router.get('/steven', async (req, res) => {
    res.render('sb-layout', {steven: true})
});

router.get('/cindy', async (req, res) => {
    res.render('cu-layout', {cindy: true})
});

router.get('/camille', async (req, res) => {
    res.render('cy-layout', {camille: true})
});

router.get('/todd', async (req, res) => {
    res.render('tg-layout', {todd: true})
});


// Create GET request to find information for logged in user



// Create GET request to login if not logged in already; redirect to homepage or profile if not logged in
// could make it so that we have code that checks if they have an existing resume?



module.exports = router;