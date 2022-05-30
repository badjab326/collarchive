// Dependencies
const express = require('express');
const Collection = require('../models/collection.js');
const router = express.Router();

// Routes
// Seed
const collectionSeed = require('../models/collectionSeed.js');

router.get('/seed', (req, res) => {
    Collection.deleteMany({},  (error, allCollections) => {})

    Collection.create(collectionSeed, (error, data) => {
        res.redirect('/')
    })
});

// Index
router.get('/', (req, res) => {
    Collection.find({}, (error, allCollections) => {
        res.render('index.ejs', {
            collections: allCollections
        })
    })
});

// Exports
module.exports = router;