const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) => {
    
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error :' +err))
})

router.post('/add',(req,res) => {
    const list = req.body.list;

    const newExercise = new Exercise({list})

    newExercise.save()
        .then( () => res.status(200).json('Exercise added!'))
        .catch(err => res.status(400).json('Error :'+err))
})

router.put('/update', async (req,res) => {
    const updatedvalue = req.body.updatedvalue;
    const id = req.body.id;

    try{
        await Exercise.findById(id,(err,newvalue) => {
            newvalue.list = updatedvalue;
            newvalue.save();
            res.send("updated");
        })
    } catch(err){
        console.log(err);
    }
});

router.delete('/delete/:id', async (req,res) => {
    const id = req.params.id;
    await Exercise.findByIdAndRemove(id).exec();
    res.send("deleted")
});




module.exports=router;