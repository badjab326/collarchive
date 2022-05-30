const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    platform: String,
    qty: Number
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;