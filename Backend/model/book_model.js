const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name : String,
    title : String,
    price : Number,
    image : String,
    category : String
})

const book = mongoose.model("book" , bookSchema);

module.exports = book;