const router = require('express').Router();
let Exercise = require('../models/exercise.model');
// let User = require('../models/user.model')

router.route('/').get((req,res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error :' +err))
})

router.post('/add',(req,res) => {
    const username =  req.body.username;
    const title = req.body.title
    const description  = req.body.description;

    const newExercise = new Exercise({username,title,description})

    newExercise.save()
        .then( () => res.status(200).json('Exercise added!'))
        .catch(err => res.status(400).json('Error :'+err))
})

// router.post("/add", async (req, res) => {
//     const { authorization } = req.headers;
//     const [, token] = authorization.split("");
//     const [username, password] = token.split(":");
//     const todosItems = req.body;
//     const user = await User.findOne({ username }).exec();
//     if (!user || user.password !== password) {
//       res.status(403);
//       res.json({
//         message: "invalid access",
//       });
//       return;
//     }
//     const todos = await Exercise.findOne({ userId: user._id }).exec();
//     if (!todos) {
//       await Exercise.create({
//         userId: user._id,
//         todos: todosItems,
//       });
//     } else {
//       todos.todos = todosItems;
//       await todos.save();
//     }
//     res.json(todosItems);
//   });


// router.post('/add', async (req, res) => {
//     const past = new Exercise({
//         ...req.body,//it will copy the all properties of the task in it
        
//     })

// try {
//     await past.save()
//     res.status(201).send(past)
// } catch (e) {
//     res.status(400).send(e)
// }
// })


module.exports=router;