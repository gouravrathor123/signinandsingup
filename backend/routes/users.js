const router = require('express').Router();
const mongo = require('mongodb').MongoClient
const assert = require('assert')
let User = require('../models/user.model')

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error :' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({name,email,password});

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.post('/signin',(req,res) => {
//    var email = req.body.email;
//    var password = req.body.password;

//    User.findByCredentials({email,password},(user,err) => {
//     res.json(user)
//    })
//     // .then( (user,err) => {
//     //     if(err){
//     //         console.log('kuch error aa gai')
//     //         return res.status(400).json('sorry ji kuch error aa gai thi ' + err)
//     //     }
//     //     if(!user){
//     //         console.log('wrong credentials beta j')
//     //         return res.status(400).json('galat salat daal rakha h aur login karne aa gye')
//     //     }

//     //     return res.status(200).json('Ho gya ji login')
//     // })
//     // .then((user,err) => res.json(user))
//     // .catch(err => res.status(400).json('Error :' + err))
// })

router.post('/signin',(req,res) => {
    const email = req.body.email
    const password = req.body.password
    User.findOne({email,password}, (err,user) => {
        if(err){
          return res.json(err)
        }
        if(!user){
           return res.status(200).json('user not find')
        }
        res.send(user)
    })
})
module.exports = router