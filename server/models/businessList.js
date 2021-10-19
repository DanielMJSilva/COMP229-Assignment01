let mongoose = require('mongoose');

// create a model class
let businessListModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    email: String
    },
    {
        collection: "businessContact" //name of the collection
    }
);

module.exports = mongoose.model('List', businessListModel);