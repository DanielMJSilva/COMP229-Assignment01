let express = require('express');
const { InsufficientStorage } = require('http-errors');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

/* GET Route for the Book List page - READ Operation */
router.get('/', (req, res, next) => {
    Book.find((err, BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BookList);
        }
    });
});

module.exports = router;