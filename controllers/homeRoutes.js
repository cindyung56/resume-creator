const router = require("express").Router();
const { User, Resume, Experience, Education, Reference, Skill,} = require("../models");
// may need authentication here?

router.get('/', async (req, res) => {
    res.render('homepage', {
      loggedIn: req.session.logged_in
    })
});


// Routes to GET chosen template
router.get("/resume/:layout", async (req, res) => {
  const resumeData = await Resume.findOne({
    where: { user_id: req.session.user_id },
    include: [Experience, Education, Reference, Skill],
  });

  const resume = resumeData.get({ plain: true });
  //   console.log(resume);

  switch (req.params.layout) {
    case "steven":
      res.render("sb-layout", { steven: true, ...resume });
      break;
    case "cindy":
      res.render("cu-layout", { cindy: true, ...resume });
      break;
    case "camille":
      res.render("cy-layout", { camille: true, ...resume });
      break;
    case "todd":
      res.render("tg-layout", { todd: true, ...resume });
      break;
    default:
      res.render("homepage");
  }
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
