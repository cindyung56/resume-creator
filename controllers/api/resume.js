const router = require('express').Router();
const { User, Resume, Experience, Education, Reference, Skill } = require('../../models');

// POST (create) new Resume based on body; use the other models to store information
router.post('/', async(req, res) => {
    try{
     
        


    } catch (err){
        res.status(500).json(err);
    }
});

// PUT (update) Resume with new information if submitted again (idk how this is going to work for now but would be a good idea to let them update their info)
router.put('/', async(req, res) => {

});


// DELETE Resume based on req.session.user_id
// TODO(?): I don't think we need to delete the other information since it wouldn't be user friendly to have them input all that information again
router.delete('/', async (req, res) => {
    try{
        const resumeData = await Resume.destroy({
            where: {
                user_id: req.session.user_id,
            },
        });

        if(!resumeData){
            res.status(400).json({message: "Could not delete resume."});
            return;
        }
        res.status(200).json(resumeData);

    } catch (err){
        res.status(500).json(err);
    }

});


module.exports = router;