const mongoose = require('mongoose');

const user5aSchema = new mongoose.Schema({
    name:{type:String, require:true},
    password:{type:String, require:true},
    email:{type:String, require:true,unique:true},
    telefono:{type:String, require:true}
})

module.exports = mongoose.model('user5a', user5aSchema);