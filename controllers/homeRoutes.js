const router = require('express').Router();
const { User, Resume, Experience, Education, Reference, Skill } = require('../models');
// may need authentication here?

router.get('/', async (req, res) => {
    res.render('homepage', {
      loggedIn: req.session.logged_in
    })
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
router.get('/login', (req, res) => {
    if (req.session.logged_in){
        res.redirect('/');
        return;
    }
    res.render('login', {login: true});   
})

router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;