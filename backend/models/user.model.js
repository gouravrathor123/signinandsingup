const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String,required: true},
    email: {type: String,unique: true,trim: true,lowercase: true,required: true},
    password: {type: String,minlength: 8,trim: true,required:true}
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User;