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
        res.redirect('/collection')
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

// New
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

// Create
router.post('/', (req, res) => {
    Collection.create(req.body, (error, createdCollection) => {
        res.redirect('/collection')
    })
});

// Show
router.get('/:id', (req, res) => {
    Collection.findById(req.params.id, (err, foundCollection) => {
        res.render('show.ejs', {
            collection: foundCollection,
            index: req.params.id
        })
    })
});

// Edit
router.get('/:id/edit', (req, res) => {
    Collection.findById(req.params.id, (err, foundCollection) => {
        res.render('edit.ejs', {
            collection: foundCollection,
            index: req.params.id
        })
    })
});

// Update
router.put('/:id', (req, res) => {
    Collection.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (err, updatedCollection) => {
            res.redirect(`/collection/${req.params.id}`)
        }
    )
});

// Exports
module.exports = router;