const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title : {
        type : String
    },
    content : {
        type : String
    },
    img : {
        type : Array
    }
})

module.exports = mongoose.model('skill' , ItemSchema)