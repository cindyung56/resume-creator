const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/steven', async (req, res) => {
    res.render('sb-layout')
});

router.get('/cindy', async (req, res) => {
    res.render('cu-layout')
});

router.get('/camille', async (req, res) => {
    res.render('cy-layout')
});

router.get('/todd', async (req, res) => {
    res.render('tg-layout')
});









module.exports = router;