const router = require('express').Router();
const { User, Resume, Experience, Education, Reference, Skill } = require('../../models');

// POST (create) new Resume based on body; use the other models to store information
// for now assume the body is an object that separates all the information for the models; everything except the resume will be an array of objects
router.post('/', async(req, res) => {
    try{
     const resumeData = await Resume.create({
        ...req.body.resume,
        user_id: req.session.user_id,
     });
     
     const experienceData = req.body.experience;
     (experienceData).forEach((element) => {
        Experience.create({
            ...element,
            user_id: req.session.user_id,
        })
     });

     const educationData = req.body.education;
     (educationData).forEach((element) => {
        Education.create({
            ...element,
            user_id: req.session.user_id,
        })
     });

     const referenceData = req.body.reference;
     (referenceData).forEach((element) => {
        Reference.create({
            ...element,
            user_id: req.session.user_id,
        })
     });

     const skillData = req.body.skill;
     (skillData).forEach((element) => {
        Skill.create({
            ...element,
            user_id: req.session.user_id,
        })
     });

     res.status(200).json({
        resumeData, 
        experienceData, 
        educationData, 
        referenceData, 
        skillData,
     });

    } catch (err){
        res.status(500).json(err);
    }
});

// PUT (update) Resume with new information if submitted again (idk how this is going to work for now but would be a good idea to let them update their info)
// TODO: how does the program know to update the specific information........ we would have to use IDs?
// router.put('/', async(req, res) => {
//     try{
//         let experienceData = false;
//         let educationData = false;
//         let referenceData = false;
//         let skillData = false;


//         const resumeData = await Resume.update({
//             ...req.body.resume,
//             where: {
//                 user_id: req.session.user_id,
//             }
//         });

//         // (req.body.experience).forEach((element) => {
//         //     const updatedData = Experience.update({
//         //         ...element,
//         //         where: {
//         //             id: req.body.experience.id, // subject to change
//         //         },
//         //     });
//         //     if (updatedData){
//         //         experienceData = true;
//         //     }
//         //  });

//          for (let i = 0; i < req.body.experience.length; i++){
//             const updatedData = Experience.update({
//                 ...req.body.experience[i],
//                 where: {
//                     id: i + 1,
//                 },
//             });
//             if(updatedData){
//                 experienceData = true;
//             }
//          }

//         //  (req.body.education).forEach((element) => {
//         //     const updatedData = Education.update({
//         //         ...element,
//         //         where: {
//         //             id: req.body.experience.id, // subject to change
//         //         },
//         //     });
//         //     if (updatedData){
//         //         educationData = true;
//         //     }
//         //  });

//         //  (req.body.reference).forEach((element) => {
//         //     const updatedData = Reference.update({
//         //         ...element,
//         //         where: {
//         //             id: req.body.experience.id, // subject to change
//         //         },
//         //     });
//         //     if (updatedData){
//         //         referenceData = true;
//         //     }
//         //  });

//         //  (req.body.skill).forEach((element) => {
//         //     const updatedData = Skill.update({
//         //         ...element,
//         //         where: {
//         //             id: req.body.experience.id, // subject to change
//         //         },
//         //     });
//         //     if (updatedData){
//         //         skillData = true;
//         //     }
//         //  });

//          if (resumeData || experienceData || educationData || referenceData || skillData){
//             res.status(200).json({
//                 resumeData,
//                 experienceData,
//                 educationData,
//                 referenceData,
//                 skillData
//             });
//          } else{
//             res.status(400).json("Could not update data.");
//          }
        
//     } catch(err){
//         res.status(500).json(err);
//     }
// });


// DELETE Resume based on req.session.user_id
router.delete('/', async (req, res) => {
    try{
        const resumeData = await Resume.destroy({
            where: {
                user_id: req.session.user_id,
            }
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




/*
Here's an example body and user I inserted into Insomnia that we can use as an example
POST a user first using Insomnia http://localhost:3001/api/users/

{
	"email": "johndoe@fakemail.com",
	"password": "password123"
}

Then add this info w/ this POST request http://localhost:3001/api/resume

{
	"resume": {
		"name": "John Doe",
		"email": "johndoe@fakemail.com",
		"phone": "8008080088",
		"linkedin": "linkedin.com/johndoe",
		"portfolio": "johndoe.github.io",
		"title": "Senior Software Engineer"
	},
	
	"experience": [
		{
			"title": "Lead Software Engineer",
			"company": "Google",
			"start_date": "July 2020",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"title": "Senior Software Engineer",
			"company": "Microsoft",
			"start_date": "Feb 2018",
			"end_date": "July 2020",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"title": "Associate Software Engineer",
			"company": "Cisco",
			"start_date": "Jul 2014",
			"end_date": "Feb 2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	],
	
	"education": [
		{
			"name": "University of California, Los Angeles",
			"start_date": "Sep 2010",
			"end_date": "June 2014",
			"degree": "Bachelor's Degree in Computer Science"
		}
	],
	
	"reference": [
		{
			"name": "Mary Smith",
			"email": "marysmith05@fakemail.com",
			"phone": "9091234567"
		},
		{
			"name": "Justin Brown",
			"email": "jbrown1@fakemail.com",
			"phone": "3003332222"
		},
		{
			"name": "Mark Nguyen",
			"email": "marknguyen@fakemail.com",
			"phone": "8004546677"
		}
	],
	
	"skill": [
		{
			"name": "HTML, CSS, JavaScript"
		},
		{
			"name": "Java, C#, Python"
		},
		{
			"name": "MySQL, Sequelize"
		},
		{
			"name": "Node.js, express"
		}
	]
}









*/