const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
   username:{type:String,required:true,unique:false},
   title:{type:String,required:true,unique:true},
   description:{ type:String, required:true,unique:true}
}, {
    timestamps: true 
})

const Exercise = mongoose.model('Exercise',exerciseSchema)

module.exports = Exercise