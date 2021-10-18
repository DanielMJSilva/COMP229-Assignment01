let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collections: "books" //name of the collection
});

module.exports = mongoose.model('Books', bookModel);