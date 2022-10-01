const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
});

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









module.exports = router;