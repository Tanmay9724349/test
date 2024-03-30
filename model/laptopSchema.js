const mongoose = require('mongoose');
const laptopSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    count:{type:Number},
    url:{type:String},
    description:{type:String}
})
module.exports = mongoose.model('laptop',laptopSchema);