let express = require('express');
const { InsufficientStorage } = require('http-errors');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Business List Model
let List = require('../models/businessList');

let businessController = require('../controllers/businessList');

/* GET Route for the Business List page - READ Operation */
router.get('/', businessController.displayBusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', businessController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', businessController.processEditPage);

/* GET to perform Deleting - DELETE Operation */
router.get('/delete/:id', businessController.performDelete);

module.exports = router;