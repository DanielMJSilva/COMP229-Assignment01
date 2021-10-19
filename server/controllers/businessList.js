let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let List = require('../models/businessList');

module.exports.displayBusinessList = (req, res, next) => {
    List.find((err, businessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(businessList);
            res.render('business/list', {title: 'Business Contact', BusinessList: businessList })
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {title: 'Add Business Contact'})
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = List({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    List.create(newContact, (err, List) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    List.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('business/edit', {title: 'Edit Business Contact', contact: contactToEdit})
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedContact = List({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    List.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    List.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-list');
        }
    })
}