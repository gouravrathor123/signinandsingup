const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error :' + err));
});

router.post("/add",async (req,res) => {

    const {username,email,password} = req.body;

    const newUser = new User({username,password,email});
    const user = await User.findOne({username})
    if(user){
        return res.status(500).json({message:"user already exists"})
    }
    await newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/signin',(req,res) => {
    const username = req.body.username
    const password = req.body.password
    User.findOne({username,password}, (err,user) => {
        if(err){
          return res.json(err)
        }
        if(!user){
           return res.status(401).json({message:'User not find'})
        }
        res.json(user)
    })
})

module.exports = router