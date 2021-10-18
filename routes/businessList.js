let express = require('express');
const { InsufficientStorage } = require('http-errors');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Business List Model
let List = require('../models/businessList');

/* GET Route for the Business List page - READ Operation */
router.get('/', (req, res, next) => {
    List.find((err, BusinessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BusinessList);
        }
    });
});

module.exports = router;