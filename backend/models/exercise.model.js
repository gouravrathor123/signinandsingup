const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
   list:{type:String,required:true,unique:true},
}, {
    timestamps: true 
})

const Exercise = mongoose.model('Exercise',exerciseSchema)

module.exports = Exercise