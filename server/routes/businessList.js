let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Business List Model
let List = require('../models/businessList');

let businessController = require('../controllers/businessList');

//helper function for guard purpose
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business List page - READ Operation */
router.get('/', businessController.displayBusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET to perform Deleting - DELETE Operation */
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;